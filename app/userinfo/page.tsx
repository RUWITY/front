"use client";

import { useState } from "react";

import Terms from "components/Terms";
import TermsDetail from "components/TermsDetail";
import UserInform from "components/UserInform";
import Complete from "components/Complete";

export default function Page() {
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
