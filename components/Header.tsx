"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { useRecoilState } from "recoil";

import { userProfileState, imgFileState } from "store";
import * as userApi from "apis/user";
import Icons from "assets/icons";
import ShareButton from "components/ShareButton";
import useLocalStorage from "hooks/useLocalStorage";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );
  const [inputs, setInputs] = useRecoilState(userProfileState);
  const [imgFile, setImgFile] = useRecoilState(imgFileState);


  const [profile, setProfile] = useState<any>();

  const loadProfile = async () => {
    const res = (await userApi.fetchProfile()) as any;

    setProfile(res);
  };

  useEffect(() => {
    if (accessToken) {
      loadProfile();
    }
  }, [accessToken]);
  const actions = [{ column: 'link', tap_id: 1, title: '링크 제목', url: '링크 url', toggle_state: false, folded_state: false, }]

  const saveProfile = async () => {
    const formData = new FormData();

    formData.append('profile', imgFile);

    const res = (await userApi.SaveProfile(
      inputs.nickname,
      inputs.explanation,
      inputs.todayLink,
      formData,
      actions
    )) as any;

    if (res) {
      alert("저장되었습니다.");
    }
  };

  if (!accessToken) {
    return <></>
  }

  if (["/", "/userinfo", "/link-history"].includes(pathname)) {
    return (
      <header
        className="fixed top-0 z-10 max-w-inherit w-full px-4 py-3 flex items-center justify-between h-15 bg-[#FAFAFA] max-w-[390px]"
        style={{
          left: "50%",
          transform: "translate(-50%, 0)",
          boxShadow: "0px 4px 24px 0px rgba(171, 167, 167, 0.1)",
        }}
      >
        <div className="flex items-center w-full">
          <Image
            src={Icons.ArrowBackIcon}
            width={24}
            height={24}
            alt="뒤로가기 아이콘"
            onClick={() => router.back()}
          />
        </div>
      </header>
    );
  }

  return (
    <header
      className="fixed top-0 z-10 max-w-inherit w-full px-4 py-3 flex items-center justify-between h-15 bg-white max-w-[390px]"
      style={{
        left: "50%",
        transform: "translate(-50%, 0)",
        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="flex items-center w-full">
        <img className="w-11 h-3" src="/logo.png" />
        <div className="flex  cursor-pointer ml-3 flex-1 max-w-[70%]">
          <p className="underline text-xs">linkg.im/</p>
          <p className="underline overflow-hidden text-ellipsis text-xs">
            {profile?.page_url}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="hover:cursor font-bold h-9 rounded-[22px] bg-primary-light text-base mr-2 !rounded-4.5 w-24 bg-[#F3F2FC] text-[#7163E8]"
          onClick={() => {
            saveProfile();
          }}
        >
          확인하기
        </button>
        <ShareButton />
      </div>
    </header>
  );
}
