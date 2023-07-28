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
        <div
          className="fixed bottom-0 bg-[#FDFDFD] h-[76px] py-4 w-full max-w-[390px] mx-auto  left-0 px-7"
          style={{
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <div className="justify-between flex">
            <div>
              <img src="/page.svg" className="w-6 h-6" />
              <div className=" text-[10px]">페이지</div>
            </div>
            <div>
              <img src="/theme.svg" className="w-6 h-6" />
              <div className=" text-[10px]">테마</div>
            </div>
            <div className=" relative text-center">
              <button
                className="bg-[#7163E8] w-[52px] h-[52px] rounded-[50%] absolute bottom-5 left-0 "
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <img src="/check.svg" className="w-10 h-10 mx-auto" />
              </button>
              <div className="text-[10px] mt-3">확인하기</div>
            </div>
            <div>
              <img src="/analyze.svg" className="w-6 h-6" />
              <div className=" text-[10px]">분석</div>
            </div>
            <div>
              <img src="/setting.svg" className="w-6 h-6" />
              <div className=" text-[10px]">설정</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
