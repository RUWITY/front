import Script from "next/script";

import { Metadata } from "next";
import DefaultLayout from "layouts/DefaultLayout";

import "styles/globals.css";

export const metadata: Metadata = {
  title: "오늘의 링크",
  description: "오늘의 링크를 남겨주세요",
  keywords: "오늘의 링크, 링크",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta name="NaverBot" content="All" />
        <meta name="NaverBot" content="index,follow" />
        <meta name="Yeti" content="All" />
        <meta name="Yeti" content="index,follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="오늘의 링크" />
      </head>
      <body>
        <DefaultLayout>
          <div>{children}</div>
        </DefaultLayout>
      </body>
    </html>
  );
}
