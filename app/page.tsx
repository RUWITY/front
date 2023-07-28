import Button from "components/Button";

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
            <button className="bg-[#7163E8] w-9 h-9 rounded-[50%]">
              <img className="w-[14px] h-[18px] mx-auto" src="share.svg" />
            </button>
          </div>
        </header>
        <main className="flex-1 px-4 z-2 pt-4 pb-18">
          <section className="mx-auto h-full ">
            <div className="flex flex-col mb-4 rounded-lg  min-h-[3rem] justify-center">
              <div className="mb-7">👤 프로필</div>
              <div className="flex mb-6">
                <div className="w-[120px] h-[120px] bg-[#F3F2FD] rounded-[50%] mr-[22px]" />
                <input
                  className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full h-11 text-sm max-w-[196px]"
                  placeholder="닉네임을 적어주세요"
                />
              </div>

              <div className="space-y-3">
                <input
                  className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                  placeholder="한줄로 나를 표현하기"
                />
                <input
                  className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                  placeholder="링크로 나를 표현하기"
                />
              </div>
            </div>
            <Button />
          </section>
        </main>
      </div>
    </div>
  );
}
