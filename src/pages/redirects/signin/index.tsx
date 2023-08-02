import { useEffect } from "react";
import { useRouter } from "next/router";

import useLocalStorage from "src/hooks/useLocalStorage";

export async function getServerSideProps({ query }: any) {
  const { access_token, refresh_token } = query

  return { props: { access_token, refresh_token } }
}

export default function SignInPage({ access_token, refresh_token }: any) {
  const router = useRouter();

  const [accessToken, setAccessToken] = useLocalStorage<string | null>("access_token", null);
  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>("refresh_token", null);

  useEffect(() => {
    if (accessToken) {
      router.push('/userinfo')
    }

    setAccessToken(access_token.replace(/'/g, ""))
    setRefreshToken(refresh_token.replace(/'/g, ""))
  }, [accessToken, refresh_token]);

  return <div className="w-full min-h-screen h-full flex bg-white"> 2</div >
}


