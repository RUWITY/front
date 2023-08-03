

import { useEffect, useState, useRef } from "react";
import Image from "next/legacy/image";
import { useRecoilState, } from "recoil";
import { useRouter } from "next/router";

import Icons from "src/assets/icons";
import Modal from "src/components/Modal";
import * as userApi from "src/apis/user";
import * as tabApi from "src/apis/tab";
import { userProfileState, imgFileState, tabListState } from "src/store";

export default function WriteSection() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputs, setInputs] = useRecoilState(userProfileState);
  const [imgFile, setImgFile] = useRecoilState(imgFileState);

  const [showModal, setShowModal] = useState(false);
  const [tabList, setTabList] = useRecoilState<any>(tabListState);

  const loadTabList = async () => {
    const res = await tabApi.fetchTabList() as any
    console.log(res)
    setTabList(res)
  }

  const loadProfile = async () => {
    const res = (await userApi.fetchProfile()) as any;

    setInputs({
      nickname: res.nickname ?? "",
      explanation: res.explanation ?? "",
      todayLink: res.today_link ?? "",
    });

    setImgFile(res.profile)
  };

  useEffect(() => {
    loadProfile();
    loadTabList();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setInputs({
      ...inputs,
      [name]: inputValue,
    });
  };

  const onUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };

  };

  const onUploadImageButtonClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };
  console.log(tabList)
  return (
    <section className="mx-auto h-full ">
      <div className="flex flex-col mb-4 rounded-lg  min-h-[3rem] justify-center">
        <div className="mb-7">👤 프로필</div>
        <div className="flex mb-6">
          <input
            type="file"
            accept="image/*"
            name="thumbnail"
            ref={inputRef}
            onChange={onUploadImage}
            className="hidden"
          />
          <div className="relative cursor-pointer mr-[22px]" onClick={onUploadImageButtonClick}>
            <img
              src={imgFile ?? 'https://i.pinimg.com/550x/f3/c9/6c/f3c96c43766c04eaa1b773eb38ef531e.jpg'}
              alt="프로필 이미지"
              className="w-24 h-24 rounded-[50%] mx-auto"
            />
            <div className="absolute bottom-2 w-6 h-6 right-[40%]">
            </div>
          </div>
          <div className="relative h-11 w-full max-w-[196px]">
            <input
              className="py-2 px-4 rounded-lg outline-none w-full h-11 max-w-[196px] bg-[#FAFAFA]  border-0 font-semibold text-base placeholder-[#A9A9A9]"
              placeholder="닉네임을 적어주세요"
              name="nickname"
              onChange={handleInputChange}
              value={inputs.nickname}
            />
            <div className="w-full h-[1px] bg-[#E5E5E5] absolute" />
          </div>
        </div>
        <div className="space-y-3 ml-4 mr-10">
          <div className="relative h-11 w-full">
            <input
              className="py-2 px-4 rounded-lg outline-none w-full h-11 text-sm bg-[#FAFAFA]  border-0 font-semibold placeholder-[#A9A9A9]"
              placeholder="한줄로 나를 표현하기"
              name="explanation"
              onChange={handleInputChange}
              value={inputs.explanation}
            />
            <div className="w-full h-[1px] bg-[#E5E5E5] absolute" />
          </div>
          <div className="relative h-11 w-full">
            <div className="absolute top-[11px]">
              <Image
                src={Icons.LinkIcon}
                width={24}
                height={24}
                alt="링크 아이콘"
              />
            </div>
            <input
              className="py-2 px-8 rounded-lg outline-none w-full h-11 text-sm bg-[#FAFAFA]  border-0 font-semibold placeholder-[#A9A9A9]"
              placeholder="링크로 나를 표현하기"
              name="todayLink"
              onChange={handleInputChange}
              value={inputs.todayLink}
            />
            <div className="w-full h-[1px] bg-[#E5E5E5] absolute" />
            <div className="absolute right-[-35px] top-[11px]">
              <Image
                onClick={() => {
                  router.push("/link-history");
                }}
                className="cursor-pointer"
                src={Icons.HistoryIcon}
                width={24}
                height={24}
                alt="타임라인 아이콘"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer w-full font-bold h-12 rounded-lg bg-primary text-white mb-4 bg-[#7163E8]"
        style={{
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.20)",
        }}
        type="button"
        onClick={() => setShowModal(true)}
      >
        + 탭 추가
      </button>
      {tabList.map((tab: any) => {
        if (tab.column === "text") {
          return (
            <div className="flex flex-col mb-4 rounded-lg bg-white min-h-[3rem] justify-center py-3 px-4" key={tab.id}>
              <div className="mb-[14px] font-semibold">✍️ 텍스트</div>
              <input
                className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                placeholder={tab.context}
                id={tab.tap_id}
                onChange={(e) => {
                  const updatedItems = tabList.map((item: any) =>
                    item.tap_id === Number(e.target.id) ? { ...item, context: e.target.value } : item
                  );
                  setTabList(updatedItems)
                }}
              />
            </div>
          );
        }
        if (tab.column === "link") {
          return (
            <div className="flex flex-col mb-4 rounded-lg bg-white min-h-[3rem] justify-center py-3 px-4" key={tab.id}>
              <div className="mb-[14px] font-semibold">🔗 링크</div>
              <input
                className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                placeholder="링크로 나를 표현하기"
                id={tab.id}
                onChange={(e) => {
                  const updatedItems = tabList.map((item: any) =>
                    item.id === Number(e.target.id) ? { ...item, context: e.target.value } : item
                  );
                  setTabList(updatedItems)
                }}
              />
            </div>
          );
        }
      })}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        loadTabList={loadTabList}
      />
    </section>
  );
}
