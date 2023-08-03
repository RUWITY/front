import { useEffect } from 'react'
import { useRouter } from 'next/router'

import SignIn from "src/components/SignIn";
import useLocalStorage from 'src/hooks/useLocalStorage'

export default function Home() {
  const router = useRouter()

  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );

  useEffect(() => {
    if (accessToken) {
      router.push('/page')
    }

  }, [accessToken]);


  return (
    <div className="w-full min-h-screen h-full flex bg-white" style={{ backgroundColor: "#ffffff" }}>
      <SignIn />
    </div>
  )
}
