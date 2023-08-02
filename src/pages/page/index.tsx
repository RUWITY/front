import WriteSection from "src/components/WriteSection";

export default function SignInPage() {
  return (
    <div className="w-full min-h-screen h-full flex pt-[60px]">
      <div className="flex flex-col text-neutral-800 max-w-[390px] w-full bg-[#FAFAFA] mx-auto relative">
        <main className="flex-1 px-4 z-2 pt-4 pb-18 mb-[76px]">
          <WriteSection />
        </main>
      </div>
    </div>
  );
}
