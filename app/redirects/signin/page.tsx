import Redirect from "components/Redirect";

export default function Page({ searchParams }: any) {
  const { access_token, refresh_token } = searchParams;



  return <Redirect access_token={access_token} refresh_token={refresh_token} />
}
