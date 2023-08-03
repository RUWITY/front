import type { GetServerSidePropsContext } from 'next'

import WriteSection from "src/components/WriteSection";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context
  const cookies = req.headers.cookie || '';
  const cookieArray = cookies.split(';');
  let myCookieValue = null;

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.startsWith('access_token=')) {
      myCookieValue = cookie.substring('access_token='.length, cookie.length);
      break;
    }
  }

  if (!myCookieValue) {
    context.res.writeHead(303, { Location: '/' })
    context.res.end()
  }

  return { props: {} }
}

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
