import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const columnFont = localFont({ src: "./fonts/Column.ttf" });

export const metadata: Metadata = {
  title: "Palette Puzzle",
  description: "Daily puzzles for color mixing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={columnFont.className}>{children}</body>
    </html>
  );
}
