import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Weekly LoL Champions",
  description: "I site that show some informations about the free weekly champions in league of legends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="background">
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
