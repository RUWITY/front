"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import Terms from "components/Terms";
import TermsDetail from "components/TermsDetail";
import UserInform from "components/UserInform";
import Complete from "components/Complete";
import * as userApi from "apis/user";

export default function Page() {
  const [isNew, setIsNew] = useState();

  const loadUserType = async () => {
    const res = (await userApi.fetchUserType()) as any;

    setIsNew(res);
  };

  useEffect(() => {
    loadUserType();
  }, []);

  useEffect(() => {
    // if (isNew) {
    //   redirect("/page");
    // }
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
