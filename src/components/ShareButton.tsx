

import Image from "next/legacy/image";
import { usePathname } from "next/navigation";

import Icons from "src/assets/icons";
export default function ShareButton({ }: any) {
  const pathname = usePathname();

  const copyURL = async () => {
    await navigator.clipboard.writeText("https://linkg.netlify.app" + pathname);

    alert("클립보드에 링크가 복사되었어요.");
  };

  return (
    <button
      className="bg-[#7163E8] w-9 h-9 rounded-[50%] inline-flex items-center justify-center"
      onClick={copyURL}
    >
      <Image src={Icons.ShareIcon} width={14} height={18} alt="공유 아이콘" />
    </button>
  );
}
