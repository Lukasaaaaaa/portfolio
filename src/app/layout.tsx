import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Lukas Gurny | KI-Stratege & Digital Transformation Consultant Berlin",
  description:
    "KI-Stratege und Berater für Digitale Transformation in Berlin. Generative KI, KI-Agenten, Use-Case-Strategie und Prozessautomatisierung. Hyper-Growth-Substanz aus der Gorillas-Skalierung kombiniert mit Agentic Engineering. Use-Case-Identifikation, Change Management bei KI-Einführung und Startup-Sparring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
