import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "TPTI — 旅行タイプ性格診断",
  description:
    "28の質問であなたの旅のスタイルを16タイプから診断。TPTI（ティプティ）で自分だけの旅の方程式を見つけよう。",
  openGraph: {
    title: "TPTI — 旅行タイプ性格診断",
    description:
      "28の質問であなたの旅のスタイルを16タイプから診断。TPTI（ティプティ）で自分だけの旅の方程式を見つけよう。",
    url: "https://tpti.jp",
    type: "website",
    siteName: "TPTI",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
