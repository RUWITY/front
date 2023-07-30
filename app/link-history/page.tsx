"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import * as urlApi from "apis/url";
import * as userApi from "apis/user";

export default function Page() {
  const [urlList, setUrlList] = useState<any>();

  useEffect(() => {
    loadUrlHistory();
  }, []);

  const loadUrlHistory = async () => {
    const res = (await urlApi.fetchUrlHistory()) as any;

    setUrlList(res);
  };

  const AddUrlView = async (id: any) => {
    (await urlApi.AddUrlView(id)) as any;
  };

  if (!urlList) {
    return <></>;
  }

  return (
    <div className="w-full min-h-screen h-full flex bg-[#FAFAFA] px-4">
      <div className="mt-[60px] text-[10px] w-full">
        <div className="w-full space-y-2">
          {urlList.map((item: any) => (
            <div
              className="bg-white px-4 py-2 w-full flex flex-col rounded-lg"
              key={item.id}
            >
              <div className="flex justify-between ">
                <div className="text-[#A9A9A9]">
                  {String(
                    new Date(item.created_at).getFullYear() - 2000
                  ).padStart(2, "0")}
                  .
                  {String(new Date(item.created_at).getMonth() + 1).padStart(
                    2,
                    "0"
                  )}
                  .
                  {String(new Date(item.created_at).getDate()).padStart(2, "0")}
                </div>
                <div
                  className="text-[#7163E8] text-[10px] cursor-pointer"
                  onClick={async () => {
                    const res = await userApi.changeTodayLink(item.id);
                  }}
                >
                  프로필로 적용하기
                </div>
              </div>
              <div className="flex">
                <img className="w-[86px] h-12 mr-1" src="/defaultImg.png" />
                <div className="flex flex-col justify-between">
                  [Playlist] 🎧들으면 딱 아는 브루노
                  <div className="text-[#A9A9A9]">조회수 {item.view}</div>
                </div>
              </div>
              <div
                className="mt-1 text-[#737373]"
                onClick={async () => {
                  await AddUrlView(item.id);
                  await loadUrlHistory();
                }}
              >
                {item.url}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
