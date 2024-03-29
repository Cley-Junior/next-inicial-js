import type { Metadata } from "next";
import "./globals.css";
import localFont from '@next/font/local'

const beaufortFont = localFont({
  src: [
    {
      path: '../../public/fonts/BeaufortForLoL/BeaufortforLOL-Bold.ttf',
      weight: '700'
    },
  ],
  variable: '--font-beaufortforlol'
})

const spiegel = localFont({
  src: [
    {
      path: '../../public/fonts/Spiegel/Spiegel_TT_Regular.ttf',
      weight: '400',
      style: "regular",
    },
    {
      path: '../../public/fonts/Spiegel/Spiegel_TT_Bold.ttf',
      weight: '700',
      style: "bold",
    }
  ],
  variable: '--font-spiegel'
})

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
    <html lang="en" className={`${spiegel.variable} font-sans`}>
      <body>
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
