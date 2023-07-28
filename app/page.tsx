import WriteSection from "components/WriteSection";
import ShareButton from "components/ShareButton";

export default async function Page() {
  return (
    <div className="w-full min-h-screen h-full flex">
      <div className="flex flex-col text-neutral-800 max-w-[390px] w-full bg-[#FAFAFA] mx-auto relative">
        <header className="sticky top-0 z-10 max-w-inherit w-full px-4 py-3 flex items-center justify-between h-15">
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
        <main className="flex-1 px-4 z-2 pt-4 pb-18">
          <WriteSection />
        </main>
      </div>
    </div>
  );
}
