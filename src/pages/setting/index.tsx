import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import type { NextPage } from 'next'
import * as userApi from "src/apis/user";
import useLocalStorage from 'src/hooks/useLocalStorage'
import DialogContainer from 'src/components/DialogContainer'
import Loading from 'src/components/Loading'

const UserInfo: NextPage = () => {
  const contents: Record<number, JSX.Element> = {
    0: <div className="text-black text-base flex flex-col items-center">
      <div className="mt-2 mb-1.5">정말 계정을<span className=" text-[#7163E8] font-semibold"> 탈퇴 </span>하시겠어요?</div>
      <div className="text-[#737373] text-xs mb-7">탈퇴한 계정은 다시 복구할 수 없어요!</div>
      <div className="flex justify-between  w-full space-x-3">
        <button
          onClick={() => {
            setShowModal(false)
          }}
          className=" text-[#a3a3a3] py-3 w-full max-w-[180px] rounded-lg border border-solid border-[#a3a3a3]">
          아니오
        </button>
        <button
          onClick={async () => {
            setShowModal(false)
            await userApi.resign()
          }}
          className=" bg-[#7163E8] text-white py-3 w-full max-w-[180px] rounded-lg font-semibold" >
          탈퇴
        </button>
      </div>
    </div >,
    1: <div className="text-black text-base flex flex-col items-center">
      <div className="mt-2 mb-12">정말 계정을<span className=" text-[#7163E8] font-semibold"> 로그아웃 </span>하시겠어요?</div>
      <div className="flex justify-between  w-full space-x-3">
        <button
          onClick={() => {
            setShowModal(false)
          }}
          className=" text-[#a3a3a3] py-3 w-full max-w-[180px] rounded-lg border border-solid border-[#a3a3a3]">
          아니오
        </button>
        <button
          onClick={() => {
            setShowModal(false)
            window.localStorage.removeItem("access_token");
            router.push('/')
          }}
          className=" bg-[#7163E8] text-white py-3 w-full max-w-[180px] rounded-lg font-semibold" >
          로그아웃
        </button>
      </div>
    </div >
  }

  const [showModal, setShowModal] = useState(false);
  const [alertIndex, setAlertIndex] = useState<any>();
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
    return <Loading />
  }

  return <div className="w-full min-h-screen h-full flex bg-[#FAFAFA] mt-[60px]">
    <div className="py-6 px-4 w-full">
      <div className="text-xl font-semibold mb-6">안녕하세요, <span className="text-[#7163E8]">{profile.page_url}</span> 님!</div>
      <div className="flex justify-between m-5">
        <div className="text-xs text-[#a9a9a9]">계정 관리</div>
        <div className="text-xs text-[#a9a9a9] cursor-pointer" onClick={() => {
          setShowModal(true)
          setAlertIndex(0)
        }}>계정 탈퇴하기</div>
      </div>
      <div className=" flex justify-between ml-4 mb-12">
        <div className="flex items-center">
          <img src="/kakao.png" className="w-6 h-6 mr-1" />{profile.page_url}</div>
        <div className="text-[#7163E8] text-sm cursor-pointer"
          onClick={() => {
            setShowModal(true)
            setAlertIndex(1)
          }}>로그아웃</div>
      </div>
      <div className="text-[#a9a9a9] text-xs mb-7">
        About for LINKG
      </div>
      <div className="text-sm text-black ml-4">개인정보 처리방침</div>
    </div>
    <DialogContainer showModal={showModal} setShowModal={setShowModal}>
      {contents[alertIndex]}
    </DialogContainer>
  </div>;
}

export default UserInfo