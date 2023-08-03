import { useEffect } from "react";
import { useRouter } from "next/router";
import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return { props: { context } }
}


export default function SignInPage({ context }: any) {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])
  console.log(context)
  return <>123</>
}


