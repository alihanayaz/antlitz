import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://antlitz.vercel.app"),
  title: { default: "antlitz", template: "%s · antlitz" },
  description: "A minimal React and Tailwind design system.",
  openGraph: { type: "website", siteName: "antlitz" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
