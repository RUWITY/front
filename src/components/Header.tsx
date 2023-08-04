import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { useRecoilValue } from "recoil";

import useLocalStorage from 'src/hooks/useLocalStorage'
import { userProfileState, imgFileState, tabListState } from "src/store";
import { isValidURL } from "src/utils/url";
import * as userApi from "src/apis/user";
import Icons from "src/assets/icons";
import ShareButton from "src/components/ShareButton";

export default function Header() {
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );
  const router = useRouter();
  const pathname = usePathname() as any

  const inputs = useRecoilValue(userProfileState);
  const imgFile = useRecoilValue(imgFileState);
  const tabList = useRecoilValue(tabListState);

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

  const actions = tabList as any

  const saveProfile = async () => {

    if (!isValidURL(inputs.todayLink) || tabList.filter((item2: any) => item2.column === 'link').every((item: any) => !isValidURL(item.title))) {
      return alert("올바른 링크가 아닙니다.");
    }

    const formData = new FormData();

    formData.append('profile', imgFile);
    formData.append('actions', actions);

    const res = (await userApi.SaveProfile(
      inputs.nickname,
      inputs.explanation,
      inputs.todayLink,
      formData,
      actions,
    )) as any;

    if (res) {
      alert("저장되었습니다.");
    }
  };

  if (["/", "/userinfo", "/link-history"].includes(pathname) || !accessToken) {
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
            className=" cursor-pointer"
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
        <ShareButton pageUrl={profile?.page_url} />
      </div>
    </header>
  );
}
