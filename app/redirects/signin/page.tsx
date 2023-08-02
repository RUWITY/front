import Redirect from "components/Redirect";
import Test from "components/Test";

export default async function Page(props: any) {

  console.log(props)
  return <Test searchParams={props} />
}


