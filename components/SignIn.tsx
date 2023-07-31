"use client";

import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/legacy/image";

import Icons from "assets/icons";
import useLocalStorage from "hooks/useLocalStorage";

export default function Page() {
  const [accessToken] = useLocalStorage("access_token", null);

  if (accessToken) {
    return redirect("/page");
  }

  return (
    <div className=" mx-auto inline-flex justify-center items-center">
      <div className="flex flex-col">
        <div className="mb-2 text-sm">링크는 링크지</div>
        <img src="/logo.png" className="w-[204px] h-[57px] mb-40" />
        <Link href="http://43.201.37.164:3000/kakao-login/login">
          <button className="cursor-pointer w-full h-13 rounded-lg bg-[#FEE500] text-black">
            카카오 로그인
            <Image
              src={Icons.KakaoIcon}
              width={24}
              height={24}
              alt="카카오 아이콘"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
