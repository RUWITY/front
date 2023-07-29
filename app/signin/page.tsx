"use client";

import SignIn from "components/SignIn";

export default async function Page() {
  return (
    <div className="w-full min-h-screen h-full flex">
      <div className="flex flex-col text-neutral-800 max-w-[390px] w-full bg-[#FAFAFA] mx-auto relative">
        <SignIn />
      </div>
    </div>
  );
}
