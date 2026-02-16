"use client";

import { useState, useMemo, useCallback } from "react";
import { getIdeas, TYPES, DIFFS, CATS, type Idea } from "./data";

const PAGE_SIZE = 24;

const TYPE_COLORS: Record<string, string> = {
  Software: "bg-accent/15 text-accent-hover",
  "Physisches Produkt": "bg-orange-500/15 text-orange-400",
  Marktplatz: "bg-purple-500/15 text-purple-400",
  Hybrid: "bg-cyan-500/15 text-cyan-400",
  Dienstleistung: "bg-pink-500/15 text-pink-400",
};

const DIFF_COLORS: Record<string, string> = {
  Einfach: "bg-success/15 text-success",
  Mittel: "bg-warning/15 text-warning",
  Schwer: "bg-error/15 text-error",
};

const STEP_COLORS = [
  "from-accent to-accent-hover",
  "from-blue-500 to-blue-400",
  "from-success to-emerald-400",
  "from-orange-500 to-orange-400",
];

function Badge({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={`text-[0.65rem] px-2 py-0.5 rounded-full font-semibold tracking-wide ${className}`}>
      {children}
    </span>
  );
}

function Card({ idea }: { idea: Idea }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-surface border border-border rounded-xl overflow-hidden transition-all cursor-pointer hover:border-accent hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 sm:hover:-translate-y-1 ${open ? "border-accent" : ""}`}
      onClick={() => setOpen((o) => !o)}
    >
      <div className="px-4 pt-4">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-[0.95rem] font-semibold leading-snug text-foreground-bright flex-1">
            {idea.name}
          </h3>
          <span className="text-lg shrink-0">{idea.country}</span>
        </div>
        {idea.description && (
          <p className={`text-sm text-foreground-muted leading-relaxed mt-2 pb-3 ${!open ? "line-clamp-3" : ""}`}>
            {idea.description}
          </p>
        )}
      </div>

      <div className="flex gap-1.5 flex-wrap px-4 py-2.5 border-t border-border bg-black/10">
        <Badge className={TYPE_COLORS[idea.type] || "bg-accent/15 text-accent"}>{idea.type}</Badge>
        <Badge className={DIFF_COLORS[idea.difficulty] || "bg-warning/15 text-warning"}>{idea.difficulty}</Badge>
        <Badge className="bg-white/5 text-foreground-muted">{idea.category}</Badge>
        {idea.cost && <Badge className="bg-success/10 text-success/80 border border-success/15">{idea.cost}</Badge>}
        {idea.source === "todoist" && <Badge className="bg-error/12 text-error">Meine Idee</Badge>}
      </div>

      {open && idea.plan.length > 0 && (
        <div className="px-4 py-4 border-t border-border bg-black/5">
          <p className="text-[0.7rem] font-bold uppercase tracking-wider text-accent-hover mb-3">
            Umsetzungsplan
          </p>
          {idea.plan.map((step, j) => (
            <div key={j} className="flex gap-3 mb-3">
              <div
                className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[0.65rem] font-bold text-white bg-gradient-to-br ${STEP_COLORS[j] || STEP_COLORS[0]}`}
              >
                {j + 1}
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-sm font-semibold text-foreground-bright">{step.p}</span>
                <span className="text-xs text-foreground-muted ml-2">{step.t}</span>
                <p className="text-sm text-foreground-muted leading-relaxed mt-0.5">{step.a}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-3 mt-4 pt-3 border-t border-border">
            <div className="flex-1 p-2.5 bg-white/[0.02] rounded-lg border border-border">
              <p className="text-[0.6rem] text-foreground-muted uppercase tracking-wider">Gesch. Kosten</p>
              <p className="text-sm font-semibold text-foreground-bright mt-0.5">{idea.cost || "k.A."}</p>
            </div>
            <div className="flex-1 p-2.5 bg-white/[0.02] rounded-lg border border-border">
              <p className="text-[0.6rem] text-foreground-muted uppercase tracking-wider">Erlösmodell</p>
              <p className="text-sm font-semibold text-foreground-bright mt-0.5">
                {idea.revenueModel.length ? idea.revenueModel.join(", ") : "TBD"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function IdeasPage() {
  const allIdeas = useMemo(() => getIdeas(), []);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterDiff, setFilterDiff] = useState("");
  const [filterCat, setFilterCat] = useState("");
  const [filterSrc, setFilterSrc] = useState("");
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return allIdeas.filter((i) => {
      if (q && !i.name.toLowerCase().includes(q) && !i.description.toLowerCase().includes(q) && !i.category.toLowerCase().includes(q)) return false;
      if (filterType && i.type !== filterType) return false;
      if (filterDiff && i.difficulty !== filterDiff) return false;
      if (filterCat && i.category !== filterCat) return false;
      if (filterSrc && i.source !== filterSrc) return false;
      return true;
    });
  }, [allIdeas, search, filterType, filterDiff, filterCat, filterSrc]);

  const visible = useMemo(() => filtered.slice(0, shown), [filtered, shown]);

  const resetFilters = useCallback(() => {
    setSearch("");
    setFilterType("");
    setFilterDiff("");
    setFilterCat("");
    setFilterSrc("");
    setShown(PAGE_SIZE);
  }, []);

  const stats = useMemo(() => {
    const ty: Record<string, number> = {};
    const df: Record<string, number> = {};
    filtered.forEach((i) => {
      ty[i.type] = (ty[i.type] || 0) + 1;
      df[i.difficulty] = (df[i.difficulty] || 0) + 1;
    });
    return { ty, df, total: filtered.length };
  }, [filtered]);

  const selectClass =
    "bg-surface border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-accent transition-colors flex-1 min-w-0";

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-[#0f0d2e] via-[#1a1547] to-[#0f0d2e]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(76,123,217,0.1),transparent_70%)] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-foreground-bright to-accent bg-clip-text text-transparent">
            Launchpad
          </h1>
          <p className="text-foreground-muted mt-1 text-sm sm:text-base">
            {stats.total} kuratierte Geschäftsideen mit Umsetzungsplan
          </p>
          <p className="text-foreground-muted/60 text-xs mt-2">
            Klicke auf eine Karte für den Umsetzungsplan
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="border-b border-border bg-surface/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto">
          <div className="bg-surface border border-border rounded-lg px-3 py-1.5 text-center shrink-0">
            <div className="text-lg font-bold text-accent-hover">{stats.total}</div>
            <div className="text-[0.55rem] text-foreground-muted uppercase tracking-wider">Gesamt</div>
          </div>
          {TYPES.map((t) =>
            stats.ty[t] ? (
              <div key={t} className="bg-surface border border-border rounded-lg px-3 py-1.5 text-center shrink-0">
                <div className="text-lg font-bold text-accent-hover">{stats.ty[t]}</div>
                <div className="text-[0.55rem] text-foreground-muted uppercase tracking-wider whitespace-nowrap">{t}</div>
              </div>
            ) : null
          )}
          {(["Einfach", "Mittel", "Schwer"] as const).map((d) => {
            const color = d === "Einfach" ? "border-l-success" : d === "Mittel" ? "border-l-warning" : "border-l-error";
            return (
              <div key={d} className={`bg-surface border border-border ${color} border-l-[3px] rounded-lg px-3 py-1.5 text-center shrink-0`}>
                <div className="text-lg font-bold text-accent-hover">{stats.df[d] || 0}</div>
                <div className="text-[0.55rem] text-foreground-muted uppercase tracking-wider">{d}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Toolbar */}
      <div className="border-b border-border bg-surface/50 sticky top-0 z-10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap gap-2">
          <div className="relative w-full sm:w-auto sm:flex-1 sm:max-w-xs order-first">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground-muted text-sm">&#128269;</span>
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setShown(PAGE_SIZE); }}
              placeholder="Ideen durchsuchen..."
              className="w-full bg-surface border border-border rounded-lg pl-9 pr-3 py-2 text-sm text-foreground outline-none focus:border-accent transition-colors"
            />
          </div>
          <select value={filterSrc} onChange={(e) => { setFilterSrc(e.target.value); setShown(PAGE_SIZE); }} className={selectClass}>
            <option value="">Alle Quellen</option>
            <option value="newsletter">Newsletter</option>
            <option value="todoist">Meine Ideen</option>
          </select>
          <select value={filterType} onChange={(e) => { setFilterType(e.target.value); setShown(PAGE_SIZE); }} className={selectClass}>
            <option value="">Alle Typen</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <select value={filterDiff} onChange={(e) => { setFilterDiff(e.target.value); setShown(PAGE_SIZE); }} className={selectClass}>
            <option value="">Alle Schwierigkeiten</option>
            {DIFFS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={filterCat} onChange={(e) => { setFilterCat(e.target.value); setShown(PAGE_SIZE); }} className={selectClass}>
            <option value="">Alle Kategorien</option>
            {CATS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {(search || filterType || filterDiff || filterCat || filterSrc) && (
            <button onClick={resetFilters} className="text-xs text-accent hover:text-accent-hover transition-colors px-2 shrink-0">
              Zurücksetzen
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {visible.length === 0 ? (
          <p className="text-center text-foreground-muted py-16">Keine Ideen gefunden</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visible.map((idea, i) => (
                <Card key={i} idea={idea} />
              ))}
            </div>
            {shown < filtered.length && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShown((s) => s + PAGE_SIZE)}
                  className="px-8 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg text-sm font-semibold transition-colors"
                >
                  Mehr laden ({visible.length}/{filtered.length})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
