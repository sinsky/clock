import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clock app",
  description: "A simple clock app",
  applicationName: "Clock",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
