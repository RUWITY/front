"use client";

import { usePathname } from "next/navigation";

export default function ShareButton({}: any) {
  const pathname = usePathname();

  const copyURL = async () => {
    await navigator.clipboard.writeText(
      "https://jade-liger-7be6fa.netlify.app" + pathname
    );

    alert("클립보드에 링크가 복사되었어요.");
  };

  return (
    <button className="bg-[#7163E8] w-9 h-9 rounded-[50%]" onClick={copyURL}>
      <img className="w-[14px] h-[18px] mx-auto" src="share.svg" />
    </button>
  );
}
