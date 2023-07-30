import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import SignIn from "components/SignIn";

export default async function SignInPage() {
  // const cookieStore = cookies();

  // const access_token = cookieStore.get("access_token");

  // if (access_token?.value) return redirect("/page");

  return (
    <div
      className="w-full min-h-screen h-full flex bg-white"
      style={{ backgroundColor: "#ffffff" }}
    >
      <SignIn />
    </div>
  );
}
