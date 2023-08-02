

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Terms from "src/components/Terms";
import TermsDetail from "src/components/TermsDetail";
import UserInform from "src/components/UserInform";
import Complete from "src/components/Complete";
import * as userApi from "src/apis/user";

// export async function getServerSideProps(context: any) {
//   const { req } = context
//   const cookies = req.headers.cookie || '';
//   const cookieArray = cookies.split(';');
//   let myCookieValue = null;

//   for (let i = 0; i < cookieArray.length; i++) {
//     const cookie = cookieArray[i].trim();
//     if (cookie.startsWith('access_token=')) {
//       myCookieValue = cookie.substring('access_token='.length, cookie.length);
//       break;
//     }
//   }

//   if (!myCookieValue) {
//     context.res.writeHead(303, { Location: '/' })
//     context.res.end()
//   }

//   return { props: {} }
// }

export default function SignInPage() {
  const router = useRouter()
  const [isNew, setIsNew] = useState();

  const loadUserType = async () => {
    const res = (await userApi.fetchUserType()) as any;

    setIsNew(res);
  };

  useEffect(() => {
    loadUserType();
  }, []);

  useEffect(() => {
    if (isNew) {
      router.push('/page')
    }
  }, [isNew]);

  const [pageIndex, setPageIndex] = useState(0);

  const pageList = [
    <Terms setPageIndex={setPageIndex} />,
    <TermsDetail />,
    <UserInform setPageIndex={setPageIndex} />,
    <Complete />,
  ];

  return <div className="w-full min-h-screen h-full flex bg-[#FAFAFA]">{pageList[pageIndex]}</div>;
}
