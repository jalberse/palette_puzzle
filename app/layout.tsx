import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const thicketFont = localFont({ src: "./fonts/Thicket.ttf" });

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
      <body className={thicketFont.className}>{children}</body>
    </html>
  );
}
