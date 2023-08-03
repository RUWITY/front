import type { GetServerSidePropsContext } from 'next'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context

  const { access_token, refresh_token } = query

  const maxAgeInSeconds = 48 * 60 * 60;

  context.res.setHeader("set-cookie", `access_token=${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjkwOTgzMTQ0LCJleHAiOjE2OTEwMjYzNDR9.vONdUGVNzZXIGK4m725Z-T8uJudyDHWSCQymedvQk6A"}; max-age=${maxAgeInSeconds}; path=/; samesite=lax; httponly;`)

  context.res.writeHead(303, { Location: '/' })
  context.res.end()

  return { props: { access_token, refresh_token } }
}

export default function SignInPage() {
  return <></>
}


