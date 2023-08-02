"use client";

import * as userApi from "src/pages/apis/user";
import { useState } from "react";

export default function UserInform({ setPageIndex }: any) {
  const [inputs, setInputs] = useState({
    url: "",
    gender: null,
    age: undefined,
  });

  const [isDuplication, setIsDuplication] = useState(false);
  const hasTrueValue = Object.values(inputs).every((value) => value);

  const { url, gender, age } = inputs;
  function validateInput(input: any) {

    const regex = /^[A-Za-z0-9_]+$/;

    return regex.test(input);
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    if (name === 'url') {

      console.log(inputs.url, validateInput(value))
      if (!validateInput(value)) {
        return
      }
      setInputs({
        ...inputs,
        url: value
      });
    } else {
      setInputs({
        ...inputs,
        [name]: inputValue,
      });
    }
  };

  const loadURLDuplication = async (url: any) => {
    try {
      const res = (await userApi.fetchURLDuplication(url)) as any;
      if (res) {
        alert("사용가능합니다.");
        setIsDuplication(res);
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  const dsa = async () => {
    const res = await userApi.fetchReport({ url, gender, age }) as any;
    console.log(res)
    if (res) {
      setPageIndex((prev: number) => prev + 1);
    }
  };

  const isNext = hasTrueValue && isDuplication;

  return (
    <div className="px-8 mt-[50px] bg-[#FAFAFA] w-full">
      <div className="text-xl font-semibold mb-6">
        나를 표현할 개성있는🎈
        <br /> 페이지 주소를 만들어 주세요
      </div>
      <div className=" bg-white py-3 px-7 rounded-lg mb-4">
        <div className=" text-sm font-semibold mb-1">페이지 이름</div>
        <div className="text-[#7163E8] text-xs mb-4">
          *영어 대소문자, 숫자, 특수문자 (_)만 사용가능
        </div>
        <div className="flex justify-between">
          <div className="mb-0 overflow-auto flex flex-1 items-center bg-neutral-50 pl-4 rounded-[0.4rem] mr-[14px] max-w-[240px] w-full">
            <div className="relative top-0 bottom-0">wity.im/</div>
            <div className="relative flex items-center overflow-hidden w-full">
              <input
                className="py-2 px-4 rounded-lg focus:border-primary focus:border data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border pl-0 bg-transparent min-width-0 w-full outline-none border-none focus:border-none hover:border-none hover:outline-none"
                onChange={handleInputChange}
                name="url"
                value={inputs.url}
              />
            </div>
          </div>
          <button
            className="w-full max-w-[80px] bg-[#F3F2FC] text-[#7163E8] rounded-lg text-xs font-semibold"
            onClick={() => {
              loadURLDuplication(url);
            }}
          >
            중복 확인
          </button>
        </div>
      </div>
      <div className=" bg-white py-3 px-7 rounded-lg">
        <div className=" text-sm font-semibold mb-5">성별 / 나이</div>
        <div className="text-xs mb-3">성별</div>
        <div className="flex  mb-5 items-center justify-between">
          <div>
            <input
              id="male"
              value="male"
              name="gender"
              type="radio"
              checked={inputs.gender === "male"}
              onChange={handleInputChange}
            />
            <span className="ml-1">남성</span>
          </div>
          <div>
            <input
              id="female"
              value="female"
              name="gender"
              type="radio"
              checked={inputs.gender === "female"}
              onChange={handleInputChange}
            />
            <span className="ml-1">여성</span>
          </div>
          <div>
            <input
              id="none"
              value="none"
              name="gender"
              type="radio"
              checked={inputs.gender === "none"}
              onChange={handleInputChange}
            />
            <span className="ml-1">표현안함</span>
          </div>
        </div>
        <div className="text-xs mb-3">나이</div>
        <input
          type="number"
          placeholder="고객님의 나이가 궁금해요"
          className="bg-neutral-50 py-2 px-4 rounded-lg focus:border-primary focus:border data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border min-width-0 w-full outline-none border-none focus:border-none hover:border-none hover:outline-none"
          name="age"
          value={inputs.age}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="bg-[#6F63E0] w-full py-[14px] rounded-lg text-white mt-11 disabled:bg-[#E5E5E5] disabled:text-black"
        disabled={!isNext}
        onClick={() => {
          dsa();
        }}
      >
        다음
      </button>
    </div>
  );
}
