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
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3208579035615674" crossOrigin="anonymous"></script>
      </head>
      <body className={thicketFont.className}>{children}</body>
    </html>
  );
}
