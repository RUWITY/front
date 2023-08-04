import { DEFAULT_SANS_SERIF_FONT } from "next/dist/shared/lib/constants";
import { useEffect, useState } from "react";

import * as urlApi from "src/apis/url";
import * as userApi from "src/apis/user";
import Loading from "src/components/Loading";

export default function LinkHistory() {
  const [urlList, setUrlList] = useState<any>();

  const loadUrlHistory = async () => {
    const res = await urlApi.fetchUrlHistory() as any
    const messages = await Promise.all(
      res.map(async (item: any) => {
        if (isYouTubeDomain(item.url)) {
          const id = getYouTubeVideoID(item.url)
          const dsa = await urlApi.fetchTYoutube(id)
          console.log(dsa)
          return { ...item, title: dsa.data.title, img: dsa.data.thumbnail_url }
        }
        else {
          return item
        }
      }
      )
    )
    console.log(messages)
    setUrlList(messages)
  };

  useEffect(() => {
    loadUrlHistory();
  }, []);

  function isYouTubeDomain(url: string): boolean {
    // Regular expression pattern to match YouTube domain
    const pattern = /^(https?:\/\/)?(www\.)?youtube\.com\//;
    return pattern.test(url);
  }

  function getYouTubeVideoID(url: string): string | null {

    const pattern = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/;
    const match = url.match(pattern);

    if (match && match[1]) {
      return match[1];
    } else {
      return null; // Invalid URL or unable to extract the video ID
    }
  }


  if (!urlList) {
    return <div>dsa<Loading /></div>
  }

  return (
    <div className="w-full min-h-screen h-full flex bg-[#FAFAFA] px-4">
      <div className="mt-[60px] text-[10px] w-full">
        <div className="w-full space-y-2">
          {urlList.map((item: any) => (
            <div className="bg-white px-4 py-2 w-full flex flex-col rounded-lg" key={item.id}>
              <div className="flex justify-between ">
                <div className="text-[#A9A9A9]">
                  {String(new Date(item.created_at).getFullYear() - 2000).padStart(2, "0")}.
                  {String(new Date(item.created_at).getMonth() + 1).padStart(2, "0")}.
                  {String(new Date(item.created_at).getDate()).padStart(2, "0")}
                </div>
                <div
                  className="text-[#7163E8] text-[10px] cursor-pointer"
                  onClick={async () => {
                    const res = await userApi.changeTodayLink(item.id);
                    alert('적용되었습니다.')
                  }}
                >
                  프로필로 적용하기
                </div>
              </div>
              <div className="flex">
                <img className="w-[86px] h-12 mr-1" src={item.img ?? "/defaultImg.png"} />
                <div className="flex flex-col justify-between">
                  <span className=" font-semibold text-[10px]" style={{
                    width: '236px',
                    padding: '0 5px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}>{item.title ?? '[Playlist] 🎧들으면 딱 아는 브루노'}</span>
                  <div className="text-[#A9A9A9]">조회수 {item.view}</div>
                </div>
              </div>
              <div
                className="mt-1 text-[#737373]"
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
