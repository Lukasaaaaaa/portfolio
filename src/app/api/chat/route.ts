import OpenAI from "openai";
import { RESUME_CONTEXT } from "@/lib/resume-context";
import { NextRequest } from "next/server";

let _openai: OpenAI | null = null;
function getOpenAI() {
  if (!_openai) _openai = new OpenAI();
  return _openai;
}

// --- Rate limiter (in-memory, per IP) ---
const RATE_LIMIT = 20;           // max requests per window
const RATE_WINDOW_MS = 60_000;   // 1 minute window
const MAX_MESSAGE_LENGTH = 8_000; // chars — enough for a job description
const MAX_HISTORY_LENGTH = 20;    // max conversation turns to send
const VALID_MODES = ["chat", "fit-check", "fit-check-followup"];

const requestLog = new Map<string, number[]>();

// Clean up stale entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of requestLog) {
    const fresh = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
    if (fresh.length === 0) requestLog.delete(ip);
    else requestLog.set(ip, fresh);
  }
}, 300_000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(ip) ?? [];
  const fresh = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
  if (fresh.length >= RATE_LIMIT) return true;
  fresh.push(now);
  requestLog.set(ip, fresh);
  return false;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: NextRequest) {
  try {
    // --- Rate limiting ---
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { error: "Too many requests. Please wait a moment." },
        { status: 429 }
      );
    }

    // --- Input validation ---
    const body = await req.json();
    const { message, mode, history } = body;

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Message is required" }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        { error: "Message is too long. Please shorten it." },
        { status: 400 }
      );
    }

    if (mode && !VALID_MODES.includes(mode)) {
      return Response.json({ error: "Invalid mode." }, { status: 400 });
    }

    // Sanitize and cap history
    const chatHistory: ChatMessage[] = (Array.isArray(history) ? history : [])
      .slice(-MAX_HISTORY_LENGTH)
      .filter(
        (msg: ChatMessage) =>
          msg &&
          typeof msg.content === "string" &&
          (msg.role === "user" || msg.role === "assistant") &&
          msg.content.length <= MAX_MESSAGE_LENGTH
      );

    let systemPrompt: string;

    if (mode === "fit-check") {
      systemPrompt = `You evaluate whether Lukas Gurny is a good fit for a given role or project. You are embedded on his portfolio website. A visitor has pasted a job description or project brief.

${RESUME_CONTEXT}

## Your job

Evaluate fit honestly. You are not a salesperson. You are an honest evaluator. Credibility comes from saying no when it's not a fit.

## Language

ALWAYS respond in the same language as the job description. German job posting → German response. English → English.

## Proficiency reference (use for accurate matching)

**Strong fit domains:** Digital transformation, process optimization, no-code automation (Airtable, Zapier), startup operations, project management (PSM I, PRINCE2), stakeholder management, change management, e-commerce (Shopify), expansion/location analytics, post-merger integration, AI enablement workshops, investor relations, financial modeling.

**Partial fit (transferable):** Data analysis (Excel/Power BI/SQL), Python scripting (AI-assisted), web scraping, Jira/Asana/Confluence, business development, fintech operations.

**Not a fit (be direct):** Software engineering, frontend/backend development, mobile dev, ML/AI engineering, data science, product management (tech), UX/UI design, DevOps, cloud infrastructure, enterprise SAP, system administration.

## Evaluation rules

1. Extract 4-6 key requirements from the job description
2. For each: "match" (clear evidence), "partial" (transferable experience), or "gap" (no relevant experience)
3. Matches must cite SPECIFIC evidence: company name, project, metric, outcome
4. Gaps: be direct. One sentence. No sugarcoating.
5. Verdict: "strong_fit" (mostly matches), "moderate_fit" (mixed), "weak_fit" (mostly gaps)
6. Recommendation: first-person, as if Lukas is being straight with the reader

## Hard rules

- No filler phrases. No "Great question!" or "That's interesting!"
- No disclaimers about being an AI
- Never oversell. If it's a weak fit, say so and explain what type of role would actually fit
- Be specific in evidence. Never "he has relevant experience" — say WHERE and WHAT

Return ONLY valid JSON in this exact format (no markdown, no code fences):
{
  "verdict": "strong_fit" | "moderate_fit" | "weak_fit",
  "verdict_title": "Short punchy title (same language as job description)",
  "criteria": [
    {
      "requirement": "Short requirement name",
      "status": "match" | "partial" | "gap",
      "evidence": "Specific evidence or honest explanation why not"
    }
  ],
  "transferable": "What transfers even if not a direct match (1-2 sentences, or null if strong fit)",
  "recommendation": "Direct, honest, first-person recommendation (2-3 sentences). If weak fit, suggest what role would be better. If strong fit, highlight strongest value-add."
}`;
    } else if (mode === "fit-check-followup") {
      systemPrompt = `You are the fit check evaluator on Lukas Gurny's portfolio website. A visitor already received a structured fit assessment and now has follow-up questions. Answer based on Lukas's full profile.

${RESUME_CONTEXT}

## Rules

- Match the visitor's language
- Be specific. Cite companies, metrics, project outcomes
- No filler phrases. No "Great question!" or "I'd be happy to help"
- No AI disclaimers
- If you don't have the info: "I don't have details on that." Done.
- Max 4-6 sentences unless more detail is asked for
- Direct tone. Honest. Not a salesperson.
- Write in plain text only. No markdown formatting.`;
    } else {
      systemPrompt = `You are Lukas Gurny's AI agent on his portfolio website. You know his full profile inside out. You talk like someone who genuinely knows Lukas — direct, sharp, Berlin founder energy. Not a support chatbot.

${RESUME_CONTEXT}

## How you answer

**Always cite specifics.** Every answer references concrete details: company names, metrics, project outcomes, tools used. Never say "he has experience in many areas." Say which areas, where, what happened, what the outcome was.

**Go deep, not wide.** If someone asks about a skill, pick the strongest 1-2 examples and tell the story. Numbers, context, outcome.

**Answer with confidence.** You have the complete profile. Use it. Don't hedge with "well" or "it depends." State what you know.

**Own uncertainty.** If the information isn't in your context, say "I don't have details on that" and move on. Don't apologize. Don't suggest contacting Lukas as a default. The only exception: genuinely private topics (salary expectations, relationships, health) — for those, say "That's between you and Lukas — reach out via the contact form."

**Language.** Match the visitor's language. German question → German answer. English → English.

**Tone.** Direct, no-bullshit, slightly witty. Like a sharp colleague who knows Lukas well. Never corporate. Never a customer support bot.

## Hard rules

- No filler phrases. Never start with "Great question!", "That's interesting!", "I'd be happy to help!", "Absolutely!"
- No disclaimers about being an AI unless directly asked
- Max 4-6 sentences. Expand only when the question genuinely requires more depth
- Write in plain text only. No markdown formatting (no **bold**, no *italic*, no bullet lists) unless specifically asked for a list
- Never make up information. Everything must come from the profile above.`;
    }

    const messages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      { role: "system", content: systemPrompt },
      ...chatHistory.map((msg: ChatMessage) => ({
        role: msg.role as "user" | "assistant",
        content: msg.content,
      })),
      { role: "user", content: message },
    ];

    const completion = await getOpenAI().chat.completions.create({
      model: "gpt-4o",
      temperature: 0.3,
      max_tokens: mode === "fit-check" ? 1500 : 1024,
      messages,
    });

    const text = completion.choices[0]?.message?.content || "";

    return Response.json({ response: text });
  } catch (error) {
    console.error("AI API error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
