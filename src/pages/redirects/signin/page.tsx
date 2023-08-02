import Redirect from "src/components/Redirect";
import Test from "src/components/Test";

export default async function Page(props: any) {

  console.log(props)
  return <Test searchParams={props} />
}


