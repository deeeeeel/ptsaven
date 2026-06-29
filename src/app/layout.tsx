import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT SAVEN - Business Solutions",
  description: "PT. Savanta Sentra Ultima (PT SAVEN) is your strategic partner for construction, general trading, event management, and industrial support services on a national scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
