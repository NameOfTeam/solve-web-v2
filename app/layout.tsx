import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/contexts/themeContext";

const pretendard = localFont({
  src: "./fonts/pretendard.woff2",
  variable: "--font-prendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SOLVE",
  description: "솔브",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        <ThemeProvider>
          <div className="w-full h-screen bg-bg">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}