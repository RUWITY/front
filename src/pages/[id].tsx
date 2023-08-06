import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import type { GetServerSidePropsContext } from 'next'
import * as urlApi from "src/apis/url";
import * as tabApi from "src/apis/tab";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;

  return {
    props: {
      id: params?.id,
    },
  };
}

export default function Page({ id }: any) {
  const router = useRouter()
  const [user, setUser] = useState<any>()
  const [tabList, setTabList] = useState<any>()

  const AddUrlView = async (id: any) => {
    (await urlApi.AddUrlView(id)) as any;
  };

  const loadUserProfile = async () => {
    try {
      const res = await urlApi.fetchUrl(id) as any
      if (res) {
        setUser(res)
      }
    } catch (error: any) {
      router.push('/')
    }
  }

  const loadTabList = async () => {
    const res = await tabApi.fetchTabList() as any
    console.log(res)
    setTabList(res)
  }

  useEffect(() => {
    loadUserProfile()
    loadTabList()
  }, [])



  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedMonth = String(month).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');

    return `${formattedMonth}월 ${formattedDay}일`;
  }

  if (!user) {
    return <div></div>
  }
  
  return (
    <div
      className="w-full min-h-screen h-full flex pt-[60px] absolute z-10  max-w-[390px]"
      style={{
        background: "linear-gradient(180deg, #7163E8 0%, #8BADFF 100%)",
      }}
    >
      <div className="flex flex-col text-neutral-800 max-w-[390px] w-full mx-auto relative">
        <main className="flex-1 px-4 z-2 pt-4 pb-18 mb-[76px] text-center">
          <div className="w-[104px] h-[104px] rounded-[50%] bg-red-400 mb-5 mx-auto" />
          <div className=" text-2xl font-semibold mb-5 text-white">{user.user_nickname}</div>
          <div className=" text-base font-semibold mb-5 text-white">{user.explanation}</div>
          <div className="text-xs mb-1.5 text-white">
            <span className=" font-semibold ">{user.user_nickname}</span>님의 <span>{formatDate(user.created_at)}</span>의 관심 링크
          </div>
          <Link href={user.today_link} onClick={() => { AddUrlView(user.today_link_id) }}>
            <div className=" underline mb-9 text-white text-sm">{user.today_link}</div>
          </Link>
          {tabList?.map((tab:any)=>{
            if(!tab.toggle_state) return <></>
            if(tab.column==='text'){
              return <>
              <div className=" text-white text-sm font-semibold mb-5">텍스트</div>
              <div className=" py-5 text-[#7163E8] font-semibold text-sm bg-white rounded-xl mb-11">{tab.context?tab.context:'링크지에 오신 것을 환영해요'}</div>
              </>
            }
            else{
              return <Link href={tab.title}>
              <div className=" text-white text-sm font-semibold mb-5">링크</div>
              <div className=" py-5 text-[#7163E8] font-semibold text-sm bg-white rounded-xl mb-11">{tab.title?tab.title:"링크지에 오신 것을 환영해요"}</div>
              </Link>
            }
            
          })}
        </main>
      </div>
    </div>
  );
}



