import type { Metadata } from "next";

import { Inter, Playfair } from "next/font/google";

import "./globals.css";

import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Arnaud Portfolio - irbo.net",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
          inter.variable,
          playfair.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
