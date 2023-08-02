import Redirect from "components/Redirect";
import Test from "components/Test";

export default async function Page({ params }: any) {

  console.log(params)
  return <Test searchParams={params} />
}


