"use client";

import { useState } from "react";
import Image from "next/legacy/image";

import Icons from "assets/icons";
import Modal from "components/Modal";

export default function WriteSection() {
  const [inputList, setInputList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="mx-auto h-full ">
      <div className="flex flex-col mb-4 rounded-lg  min-h-[3rem] justify-center">
        <div className="mb-7">👤 프로필</div>
        <div className="flex mb-6">
          <div className="w-[120px] h-[120px] bg-[#F3F2FD] rounded-[50%] mr-[22px]" />
          <div className="relative h-11 w-full max-w-[196px]">
            <input
              className="py-2 px-4 rounded-lg outline-none w-full h-11 max-w-[196px] bg-[#FAFAFA]  border-0 font-semibold text-base placeholder-[#A9A9A9]"
              placeholder="닉네임을 적어주세요"
            />
            <div className="w-full h-[1px] bg-[#E5E5E5] absolute" />
          </div>
        </div>
        <div className="space-y-3 ml-4 mr-10">
          <div className="relative h-11 w-full">
            <input
              className="py-2 px-4 rounded-lg outline-none w-full h-11 text-sm bg-[#FAFAFA]  border-0 font-semibold placeholder-[#A9A9A9]"
              placeholder="한줄로 나를 표현하기"
            />
            <div className="w-full h-[1px] bg-[#E5E5E5] absolute" />
          </div>
          <div className="relative h-11 w-full">
            <div className="absolute top-[11px]">
              <Image
                src={Icons.LinkIcon}
                width={24}
                height={24}
                alt="링크 아이콘"
              />
            </div>
            <input
              className="py-2 px-8 rounded-lg outline-none w-full h-11 text-sm bg-[#FAFAFA]  border-0 font-semibold placeholder-[#A9A9A9]"
              placeholder="링크로 나를 표현하기"
            />
            <div className="w-full h-[1px] bg-[#E5E5E5] absolute" />
            <div className="absolute right-[-35px] top-[11px]">
              <Image
                src={Icons.HistoryIcon}
                width={24}
                height={24}
                alt="타임라인 아이콘"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer w-full font-bold h-12 rounded-lg bg-primary text-white mb-4 bg-[#7163E8]"
        style={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.20)",
        }}
        type="button"
        onClick={() => setShowModal(true)}
      >
        + 탭 추가
      </button>
      {inputList.map((input: any) => {
        if (input === "text")
          return (
            <div className="flex flex-col mb-4 rounded-lg bg-white min-h-[3rem] justify-center py-3 px-4">
              <div className="mb-[14px]">✍️ 텍스트</div>
              <input
                className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                placeholder="텍스트로 나를 표현하기"
              />
            </div>
          );
        if (input === "link")
          return (
            <div className="flex flex-col mb-4 rounded-lg bg-white min-h-[3rem] justify-center py-3 px-4">
              <div className="mb-[14px]">🔗 링크</div>
              <input
                className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                placeholder="링크로 나를 표현하기"
              />
            </div>
          );
      })}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setInputList={setInputList}
        inputList={inputList}
      />
    </section>
  );
}
