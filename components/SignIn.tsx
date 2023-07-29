"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="w-full min-h-screen h-full flex">
      <button onClick={() => signIn("kakao")}>
        <img src="/kakao_login_button.png" />
      </button>
    </div>
  );
}
