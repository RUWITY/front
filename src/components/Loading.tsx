import { useState } from "react";

import useInterval from "src/hooks/useInterval";

export default function Loading({ }: any) {
  const [index, setIndex] = useState(0)
  const list = [<div className="bg-[#7368EA] rounded-[50%] w-24 h-24" />, <div className="bg-[#7368EA] rounded-[50%] w-7 h-7 " />, <div className="bg-[#7368EA] rounded-[50%]  w-14 h-14" />, <div className="bg-[#7368EA] rounded-[50%] w-7 h-7 " />, <div className="bg-[#7368EA] rounded-[50%] w-24 h-24" />]

  useInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % list.length);
  }, 300);

  return (
    <div className=" mx-auto max-w-24">
      {list[index]}
    </div>
  );
}
