import Redirect from "components/Redirect";
import Test from "components/Test";

export default async function Page({ searchParams }: any) {
  // const { access_token, refresh_token } = searchParams;
  console.log(searchParams)
  return <Test searchParams={searchParams} />
}


