"use client";

import { useState } from "react";
import Image from "next/legacy/image";

import Icons from "assets/icons";

export default function Terms({ setPageIndex }: any) {
  const [consent, setConsent] = useState({
    required1: false,
    required2: false,
    optional: false,
  });

  const handleRequiredChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "required1" | "required2"
  ) => {
    setConsent((prevState) => ({
      ...prevState,
      [type]: e.target.checked,
    }));
  };

  const handleOptionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsent({
      ...consent,
      optional: e.target.checked,
    });
  };

  function isAllConsentsGranted(consentState: {
    required1: boolean;
    required2: boolean;
    optional: boolean;
  }): boolean {
    return (
      consentState.required1 && consentState.required2 && consentState.optional
    );
  }

  return (
    <div className=" mx-auto inline-flex justify-center items-center px-8">
      <div className="flex flex-col">
        <div className="text-xl font-semibold mb-20">
          환영합니다.🎉 링크지 사용을 위한 약관 동의가 필요해요 :)
        </div>
        <div className="mx-12 flex flex-col space-y-4 text-xs text-[#A9A9A9] mb-11">
          <div className="flex justify-between">
            <label className=" cursor-pointer">
              <input
                type="checkbox"
                checked={consent.required1}
                onChange={(e) => handleRequiredChange(e, "required1")}
              />
              [필수] 서비스 이용약관 동의
            </label>
            <Image
              className=" cursor-pointer"
              src={Icons.InfoIcon}
              width={16}
              height={16}
              alt="상세보기 아이콘"
              onClick={() => {
                setPageIndex(1);
              }}
            />
          </div>
          <div className="flex justify-between">
            <label className=" cursor-pointer">
              <input
                type="checkbox"
                checked={consent.required2}
                onChange={(e) => handleRequiredChange(e, "required2")}
              />
              [필수] 개인정보 수집 및 이용동의
            </label>
            <Image
              className=" cursor-pointer"
              src={Icons.InfoIcon}
              width={16}
              height={16}
              alt="상세보기 아이콘"
              onClick={() => {
                setPageIndex(1);
              }}
            />
          </div>
          <div className="flex justify-between">
            <label className=" cursor-pointer">
              <input
                type="checkbox"
                checked={consent.optional}
                onChange={handleOptionalChange}
              />
              (선택) 마케팅 정보 수신 동의
            </label>
            <Image
              className=" cursor-pointer"
              src={Icons.InfoIcon}
              width={16}
              height={16}
              alt="상세보기 아이콘"
              onClick={() => {
                setPageIndex(1);
              }}
            />
          </div>
        </div>
        <div className=" mx-auto flex mb-16">
          <div
            className="text-xl mr-4 font-semibold"
            onClick={() => {
              setConsent({
                required1: true,
                required2: true,
                optional: true,
              });
            }}
          >
            모두동의
          </div>
          <div>
            {isAllConsentsGranted(consent) ? "다 동의" : "다 동의 아님"}
          </div>
        </div>
        <button
          className=" text-base py-[14px] w-full bg-[#6F63E0] rounded-lg text-white font-semibold"
          onClick={() => {
            setPageIndex(2);
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}
