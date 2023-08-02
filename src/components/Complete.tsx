import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import * as userApi from "src/apis/user";

export default function Complete() {
  const router = useRouter();
  const [url, setUrl] = useState();

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    const res = (await userApi.fetchProfile()) as any;

    setUrl(res.page_url);
  };

  return (
    <div className="mx-auto px-8 mt-[50px] bg-[#FAFAFA] text-center">
      <div className="text-xl font-semibold mb-4">
        <span className="text-[#7163E8]">{url}</span>님,
        <br />
        링크지 가입을 환영해요!
      </div>
      <div className=" text-xs">이제 나만의 프로필을 꾸미러 가볼까요?</div>
      <Image src="/rectangle.png" className="w-[272px] h-[272px] mx-auto" alt={'1'} />
      <button
        className="bg-[#6F63E0] w-full py-[14px] rounded-lg text-white mt-11"
        onClick={() => {
          router.push("/");
        }}
      >
        내 프로필 만들기
      </button>
    </div>
  );
}
