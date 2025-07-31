import type { Metadata } from "next";

import MediaQuery from "@/components/media-query";
import Nav from "@/components/nav";
import VimIndicator from "@/components/vim-indicator";
import { ThemeProvider } from "@/lib/theme";

import "./globals.css";

export const metadata: Metadata = {
  title: "Alistair O'Brien",
  description: "Alistair O'Brien's personal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-inter flex min-h-screen flex-col justify-between bg-gray-50 pb-8 text-gray-500 antialiased dark:bg-gray-900`}
      >
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <MediaQuery query="(min-width: 768px)">
            <VimIndicator />
          </MediaQuery>
        </ThemeProvider>
      </body>
    </html>
  );
}
