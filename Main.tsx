const Main = () => {
  return (
    <div className="max-w-[1000px] mx-auto bg-red-400 w-full min-h-screen h-full flex">
      <div className="flex flex-col max-w-[400px] w-full h-screen justify-center items-center whitespace-pre-line min-divideHalf:overflow-hidden desktop:hidden relative">
        소개 섹션입니다.
      </div>
      <div className="flex flex-col text-neutral-800 max-w-wityBodyWidth w-full bg-neutral-50 mx-auto relative">
        <header className="sticky top-0 z-10 max-w-inherit w-full px-4 py-3 flex items-center justify-between h-15">
          <div className="flex items-center w-full">
            로고
            <div className="flex  cursor-pointer ml-3 flex-1 max-w-[70%]">
              <p className="underline">linkg.im/</p>
              <p className="underline overflow-hidden text-ellipsis">222</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="hover:cursor font-bold h-9 rounded-lg bg-primary-light text-primary mr-2 !rounded-4.5 w-24">
              미리보기
            </button>
            <div>공유</div>
          </div>
        </header>
        <main className="flex-1 bg-neutral-50 px-4 z-2 pt-4 pb-18">
          <section className="mx-auto h-full ">
            <div className="flex flex-col mb-4 rounded-lg bg-white min-h-[3rem] justify-center p-5">
              <div className="flex justify-between">
                <div>프로필</div>
                <div>프로필</div>
              </div>
              <div className="w-20 h-20 bg-blue-300 rounded-[50%] mx-auto mb-10" />
              <div className=" space-y-3">
                <input
                  className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                  placeholder="닉네임을 적어주세요"
                />
                <input
                  className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                  placeholder="한줄로 나를 표현하기"
                />
                <input
                  className="py-2 px-4 rounded-lg outline-none focus:border-solid focus:border-primary focus:border w-full data-[state=invalid]:focus:border-solid data-[state=invalid]:focus:border-red-500 data-[state=invalid]:focus:border bg-neutral-100 h-11 text-sm"
                  placeholder="오늘의 링크"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Main;
