import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tom Deutsch | Senior Product Manager & AI Systems Architect",
  description:
    "Expert in architecting enterprise AI platforms, autonomous agents, and mission-critical systems from inception to scale.",
  openGraph: {
    title: "Tom Deutsch — Senior Product Manager & AI Systems Architect",
    description:
      "Expert in architecting enterprise AI platforms, autonomous agents, and mission-critical systems from inception to scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#09090b] text-zinc-100`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}