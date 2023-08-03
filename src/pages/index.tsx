import SignIn from "src/components/SignIn";
import type { GetServerSidePropsContext } from 'next'

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

  if (myCookieValue) {
    context.res.writeHead(303, { Location: '/page' })
    context.res.end()
  }

  return { props: {} }
}

export default function Home() {
  return (
    <div className="w-full min-h-screen h-full flex bg-white" style={{ backgroundColor: "#ffffff" }}>
      <SignIn />
    </div>
  )
}
