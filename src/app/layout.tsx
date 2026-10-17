import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    "Architecting Enterprise AI Agents & Platforms That Actually Scale. From commanding Iron Dome C2 systems to scaling the U-AI Workspace for ~5,000 active users at Unity.",
  openGraph: {
    title: "Tom Deutsch — Senior Product Manager & AI Systems Architect",
    description:
      "Bridging deep technical architectures and commercial ROI. Scaled U-AI Workspace to ~5,000 MAU at Unity | $4.4B Merger Infrastructure | IAF Major (Res.).",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
