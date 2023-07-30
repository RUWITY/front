"use client";

import { usePathname } from "next/navigation";
import Image from "next/legacy/image";

import Icons from "assets/icons";

export default function BottomNav() {
  const pathname = usePathname();

  if (["/", "/userinfo"].includes(pathname)) {
    return <></>;
  }

  return (
    <div
      className="fixed bottom-0 bg-[#FDFDFD] h-[76px] py-4 w-full max-w-[390px] mx-auto left-0 px-7"
      style={{
        left: "50%",
        transform: "translate(-50%, 0)",
      }}
    >
      <div className="justify-between flex">
        <button>
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.PageIcon}
            width={24}
            height={24}
            alt="페이지 아이콘"
          />
          <div className=" text-[10px]">페이지</div>
        </button>
        <button>
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.ThemeIcon}
            width={24}
            height={24}
            alt="테마 아이콘"
          />
          <div className="text-[10px] text-center">테마</div>
        </button>
        <div className="relative text-center">
          <button
            className="bg-[#7163E8] w-[52px] h-[52px] rounded-[50%] absolute bottom-5 left-0 inline-flex justify-center items-center"
            style={{
              transform: "translate(-15%, -10%)",
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.20)",
            }}
          >
            <Image
              className="mb-[2px]"
              src={Icons.CheckIcon}
              width={24}
              height={24}
              alt="체크 아이콘"
            />
          </button>
          <div className="text-[10px] mt-[23px]">확인하기</div>
        </div>
        <button>
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.AnalyzeIcon}
            width={24}
            height={24}
            alt="분석 아이콘"
          />
          <div className=" text-[10px] text-center">분석</div>
        </button>
        <button>
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.SettingIcon}
            width={24}
            height={24}
            alt="설정 아이콘"
          />
          <div className=" text-[10px] text-center">설정</div>
        </button>
      </div>
    </div>
  );
}
