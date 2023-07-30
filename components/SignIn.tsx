"use client";

import Link from "next/link";
import { redirect } from "next/navigation";

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
          <img src="/kakao_login_button.png" />
        </Link>
      </div>
    </div>
  );
}
