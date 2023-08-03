import { useEffect } from "react";
import { useRouter } from "next/router";

export default function SignInPage() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return <></>
}


