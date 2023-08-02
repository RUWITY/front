

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import Terms from "src/components/Terms";
import TermsDetail from "src/components/TermsDetail";
import UserInform from "src/components/UserInform";
import Complete from "src/components/Complete";
import * as userApi from "src/pages/apis/user";

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
