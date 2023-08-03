import { useEffect } from "react";
import { useRouter } from "next/router";
import type { GetServerSidePropsContext } from 'next'




export default function SignInPage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])


  return <>123</>
}


