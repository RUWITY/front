// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { isServer } from "utils/env";


// import * as urlApi from "apis/url";

// export default function Page({ params }: { params: { id: string } }) {
//   const { id } = params;
//   const [user, setUser] = useState<any>()

//   const AddUrlView = async (id: any) => {
//     (await urlApi.AddUrlView(id)) as any;
//   };

//   const loadUserProfile = async () => {
//     try {
//       const res = await urlApi.fetchUrl(id) as any
//       if (res) {
//         setUser(res)
//       }
//     } catch (error: any) {
//       if (!isServer) {
//         redirect('/')
//       }

//     }
//   }

//   useEffect(() => {
//     loadUserProfile()
//   }, [])

//   function formatDate(dateString: string): string {
//     const date = new Date(dateString);
//     const month = date.getMonth() + 1;
//     const day = date.getDate();


//     const formattedMonth = String(month).padStart(2, '0');
//     const formattedDay = String(day).padStart(2, '0');

//     return `${formattedMonth}월 ${formattedDay}일`;
//   }


//   if (!user) {
//     return <div></div>
//   }

//   console.log(user)

//   return (
//     <div
//       className="w-full min-h-screen h-full flex pt-[60px] absolute z-10  max-w-[390px]"
//       style={{
//         background: "linear-gradient(180deg, #7163E8 0%, #8BADFF 100%)",
//       }}
//     >
//       <div className="flex flex-col text-neutral-800 max-w-[390px] w-full mx-auto relative">
//         <main className="flex-1 px-4 z-2 pt-4 pb-18 mb-[76px] text-center">
//           <div className="w-[104px] h-[104px] rounded-[50%] bg-red-400 mb-5 mx-auto" />
//           <div className=" text-2xl font-semibold mb-5 text-white">{user.user_nickname}</div>
//           <div className=" text-base font-semibold mb-5 text-white">{user.explanation}</div>
//           <div className="text-xs mb-1.5 text-white">
//             <span className=" font-semibold ">{user.user_nickname}</span>님의 <span>{formatDate(user.created_at)}</span>의 관심 링크
//           </div>
//           <Link href={user.today_link} onClick={() => { AddUrlView(67) }}>
//             <div className=" underline mb-9 text-white text-sm">{user.today_link}</div>
//           </Link>
//           <div className=" text-white text-sm font-semibold mb-5">요즘 듣고있는 노래!</div>
//           <div className=" py-5 text-[#7163E8] font-semibold text-sm bg-white rounded-xl mb-11">링크입력</div>
//           <div className=" text-white text-sm font-semibold mb-6">링크지는 언제나 최고의 웹프로필을 지원합니다</div>
//           <Link href='/'>
//             <button className="w-full bg-white py-5 px-5 inline-flex items-center rounded-xl">
//               <img src="/logo.png" className="w-[77px] h-5 mr-6" />
//               <div className=" text-[#7163E8] font-semibold">링크지 홈페이지🏠</div>
//             </button>
//           </Link>
//         </main>
//       </div>
//     </div>
//   );
// }

import SignIn from "src/components/SignIn";

export default async function SignInPage() {

  return (
    <div className="w-full min-h-screen h-full flex bg-white" style={{ backgroundColor: "#ffffff" }}>
      123
    </div>
  );
}
