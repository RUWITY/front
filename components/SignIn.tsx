"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className=" mx-auto inline-flex justify-center items-center">
      <div className="flex flex-col">
        <div className="mb-2 text-sm">링크는 링크지</div>
        <img src="/logo.png" className="w-[204px] h-[57px] mb-40" />
        <button onClick={() => signIn("kakao")}>
          <img src="/kakao_login_button.png" />
        </button>
      </div>
    </div>
  );
}
