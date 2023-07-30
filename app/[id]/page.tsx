export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div
      className="w-full min-h-screen h-full flex pt-[60px] "
      style={{
        background: "linear-gradient(180deg, #7163E8 0%, #8BADFF 100%)",
      }}
    >
      <div className="flex flex-col text-neutral-800 max-w-[390px] w-full mx-auto relative">
        <main className="flex-1 px-4 z-2 pt-4 pb-18 mb-[76px] text-center">
          <div className="w-[104px] h-[104px] rounded-[50%] bg-red-400 mb-5 mx-auto" />
          <div className=" text-2xl font-semibold mb-5 text-white">
            링크지 23728
          </div>
          <div className=" text-base font-semibold mb-5 text-white">
            한줄로 나를 표현하기
          </div>
          <div className=" text-base font-semibold mb-5 text-white">
            한줄로 나를 표현하기
          </div>
          <div className="text-xs mb-1.5 text-white">
            <span className=" font-semibold ">{id}</span>님의 07월 29일의 관심
            링크
          </div>
          <div className=" underline mb-9 text-white text-sm">
            https://www.youtube.com/watch?v=3TsDxUE1a5E
          </div>
          <div className=" text-white text-sm font-semibold mb-5">
            요즘 듣고있는 노래!
          </div>
          <div className=" py-5 text-[#7163E8] font-semibold text-sm bg-white rounded-xl mb-11">
            링크입력
          </div>
          <div className=" text-white text-sm font-semibold mb-6">
            링크지는 언제나 최고의 웹프로필을 지원합니다
          </div>
          <button className="w-full bg-white py-5 px-5 inline-flex items-center rounded-xl">
            <img src="/logo.png" className="w-[77px] h-5 mr-6" />
            <div className=" text-[#7163E8] font-semibold">
              링크지 홈페이지🏠
            </div>
          </button>
        </main>
      </div>
    </div>
  );
}
