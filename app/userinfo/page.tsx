"use client";

import { useEffect, useState } from "react";

import Terms from "components/Terms";
import TermsDetail from "components/TermsDetail";
import UserInform from "components/UserInform";
import Complete from "components/Complete";
import * as userApi from "apis/user";

export default function Page() {
  const dsa = () => {
    const dsa = userApi.fetchUserType();
    console.log(dsa);
  };

  useEffect(() => {
    dsa();
  }, []);

  const [pageIndex, setPageIndex] = useState(0);

  const pageList = [
    <Terms setPageIndex={setPageIndex} />,
    <TermsDetail />,
    <UserInform setPageIndex={setPageIndex} />,
    <Complete />,
  ];

  return (
    <div className="w-full min-h-screen h-full flex bg-white">
      {pageList[pageIndex]}
    </div>
  );
}
