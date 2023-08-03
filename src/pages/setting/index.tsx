import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import type { NextPage } from 'next'
import * as userApi from "src/apis/user";
import useLocalStorage from 'src/hooks/useLocalStorage'

const UserInfo: NextPage = () => {
  const router = useRouter()
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );
  const [profile, setProfile] = useState<any>();

  const loadProfile = async () => {
    const res = (await userApi.fetchProfile()) as any;

    setProfile(res);
  };

  useEffect(() => {
    if (accessToken) {
      loadProfile();
    }
    else {
      router.push('/')
    }
  }, [accessToken]);

  if (!profile) {
    return <></>
  }

  return <div className="w-full min-h-screen h-full flex bg-[#FAFAFA] mt-[60px]">
    <div className="py-6 px-4 w-full">
      <div className="text-xl font-semibold mb-6">안녕하세요, <span className="text-[#7163E8]">{profile.page_url}</span> 님!</div>
      <div className="flex justify-between m-5">
        <div className="text-xs text-[#a9a9a9]">계정 관리</div>
        <div className="text-xs text-[#a9a9a9] cursor-pointer" onClick={() => {
          alert('준비중 입니다.')
        }}>계정 탈퇴하기</div>
      </div>
      <div className=" flex justify-between ml-4 mb-12">
        <div className="flex items-center">
          <img src="/kakao.png" className="w-6 h-6 mr-1" />{profile.page_url}</div>
        <div className="text-[#7163E8] text-sm cursor-pointer"
          onClick={() => {
            window.localStorage.removeItem("access_token");
            router.push('/')
          }}>로그아웃</div>
      </div>
      <div className="text-[#a9a9a9] text-xs mb-7">
        About for LINKG
      </div>
      <div className="text-sm text-black ml-4">개인정보 처리방침</div>
    </div>
  </div>;
}

export default UserInfo