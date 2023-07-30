import SignIn from "components/SignIn";

export default async function SignInPage() {
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
