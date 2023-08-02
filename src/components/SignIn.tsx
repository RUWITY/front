

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/legacy/image";

import Icons from "src/assets/icons";
import useLocalStorage from "src/hooks/useLocalStorage";

export default function Page() {
  const router = useRouter()
  const [accessToken] = useLocalStorage("access_token", null);

  if (accessToken) {
    return router.push("/page");
  }

  return (
    <div className=" mx-auto inline-flex justify-center items-center flex-col w-full">

      <div className="mb-2 text-sm">링크는 링크지</div>
      <img src="/logo.png" className="h-[57px] mb-40  max-w-[204px] w-full" />
      <Link href="https://ruwity.wishu.site/kakao-login/login" className="w-full">
        <button className="cursor-pointer w-full rounded-lg bg-[#FEE500] text-black py-3 inline-flex items-center relative justify-center">
          <div className="absolute left-2 top-3">
            <Image
              src={Icons.KakaoIcon}
              width={24}
              height={24}
              alt="카카오 아이콘"
            />
          </div>
          <span className="text-base">카카오로 시작하기</span>
        </button>
      </Link>
    </div>
  );
}
