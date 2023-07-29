"use client";

import { usePathname } from "next/navigation";

import ShareButton from "components/ShareButton";

export default function Header() {
  const pathname = usePathname();

  if (["/signin", "/userinfo"].includes(pathname)) {
    return <></>;
  }

  return (
    <header
      className="fixed top-0 z-10 max-w-inherit w-full px-4 py-3 flex items-center justify-between h-15 bg-white max-w-[390px]"
      style={{
        left: "50%",
        transform: "translate(-50%, 0)",
        boxShadow: "0px 4px 24px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <div className="flex items-center w-full">
        <img className="w-11 h-3" src="/logo.png" />
        <div className="flex  cursor-pointer ml-3 flex-1 max-w-[70%]">
          <p className="underline">wity.im/</p>
          <p className="underline overflow-hidden text-ellipsis">222</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="hover:cursor font-bold h-9 rounded-lg bg-primary-light text-primary mr-2 !rounded-4.5 w-24 bg-[#F3F2FC] text-[#7163E8]">
          확인하기
        </button>
        <ShareButton />
      </div>
    </header>
  );
}
