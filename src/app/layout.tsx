import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { inter, josefinSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Arnaud's Personal Website",
  description: "Welcome to my personal website",
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
          "flex min-h-screen flex-col antialiased font-sans-inter",
          inter.variable,
          josefinSans.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="relative grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
