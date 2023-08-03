

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/legacy/image";
import { useRecoilState } from "recoil";

import * as userApi from "src/apis/user";
import { userProfileState, imgFileState } from "src/store";
import Icons from "src/assets/icons";
import Alert from "src/components/Alert";


export default function BottomNav({ accessToken }: any) {
  const router = useRouter();
  const pathname = usePathname();

  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useRecoilState(userProfileState);
  const [imgFile, setImgFile] = useRecoilState(imgFileState);

  if (!accessToken) {
    return <></>
  }

  if (["/", "/userinfo", "/link-history"].includes(pathname)) {
    return <></>;
  }

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

  return (
    <div
      className="fixed bottom-0 bg-[#FDFDFD] h-[76px] py-4 w-full max-w-[390px] mx-auto left-0 px-7"
      style={{
        left: "50%",
        transform: "translate(-50%, 0)",
      }}
    >
      <div className="justify-between flex">
        <button
          onClick={() => {
            router.push("/page");
          }}
        >
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.PageIcon}
            width={24}
            height={24}
            alt="페이지 아이콘"
          />
          <div className=" text-[10px] text-[#7163E8] font-semibold">
            페이지
          </div>
        </button>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.ThemeIcon}
            width={24}
            height={24}
            alt="테마 아이콘"
          />
          <div className="text-[10px] text-center">테마</div>
        </button>
        <div className="relative text-center">
          <button
            className="bg-[#7163E8] w-[52px] h-[52px] rounded-[50%] absolute bottom-5 left-0 inline-flex justify-center items-center"
            style={{
              transform: "translate(-15%, -10%)",
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.20)",
            }}
            onClick={() => {
              saveProfile();
            }}
          >
            <Image
              className="mb-[2px]"
              src={Icons.CheckIcon}
              width={24}
              height={24}
              alt="체크 아이콘"
            />
          </button>
          <div className="text-[10px] mt-[30px]">확인하기</div>
        </div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.AnalyzeIcon}
            width={24}
            height={24}
            alt="분석 아이콘"
          />
          <div className=" text-[10px] text-center">분석</div>
        </button>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Image
            className="mx-auto mb-[2px]"
            src={Icons.SettingIcon}
            width={24}
            height={24}
            alt="설정 아이콘"
          />
          <div className=" text-[10px] text-center">설정</div>
        </button>
      </div>
      <Alert
        showModal={showModal}
        setShowModal={setShowModal}
        title="죄송합니다."
        content="현재 버전에서는 제공되지 않는 서비스입니다."
      />
    </div>
  );
}
