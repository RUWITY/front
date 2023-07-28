"use client";

import { useState } from "react";
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
          <input
            className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full h-11 text-sm max-w-[196px]"
            placeholder="닉네임을 적어주세요"
          />
        </div>
        <div className="space-y-3">
          <input
            className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
            placeholder="한줄로 나를 표현하기"
          />
          <input
            className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
            placeholder="링크로 나를 표현하기"
          />
          {inputList.map((input: any) => {
            if (input === "text")
              return (
                <div>
                  표시할 텍스트
                  <input
                    className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                    placeholder="텍스트로 나를 표현하기"
                  />
                </div>
              );
            if (input === "link")
              return (
                <div>
                  표시할 링크
                  <input
                    className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                    placeholder="링크로 나를 표현하기"
                  />
                </div>
              );
          })}
        </div>
      </div>

      <button
        className=" cursor-pointer  w-full font-bold h-12 rounded-lg bg-primary text-white mb-4 bg-[#7163E8]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + 탭 추가
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setInputList={setInputList}
        inputList={inputList}
      />
    </section>
  );
}
