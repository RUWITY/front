import { useEffect } from 'react'
import { useRouter } from 'next/router'

import type { GetServerSidePropsContext } from 'next'
import useLocalStorage from 'src/hooks/useLocalStorage'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context
  const { access_token, refresh_token } = query

  return { props: { access_token, refresh_token } }
}

export default function SignInPage({ access_token, refresh_token }: any) {
  const router = useRouter()

  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );

  useEffect(() => {
    if (accessToken) {
      router.push('/userinfo')
    }

    setAccessToken(access_token.replace(/'/g, ""))
  }, [accessToken, refresh_token]);


  return <></>
}


