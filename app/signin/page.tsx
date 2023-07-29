"use client";

import SignIn from "components/SignIn";

export default async function SignInPage() {
  return (
    <div
      className="w-full min-h-screen h-full flex bg-white"
      style={{ backgroundColor: "#ffffff" }}
    >
      <SignIn />
    </div>
  );
}
