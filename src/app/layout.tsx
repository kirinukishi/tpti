import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import Script from "next/script";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { LocaleProvider } from "../i18n/LocaleProvider";
import "./globals.css";

const zenMaru = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
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
        className={`${zenMaru.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JJ5B4YKETL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JJ5B4YKETL');
          `}
        </Script>
        <GoogleAnalytics />
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
