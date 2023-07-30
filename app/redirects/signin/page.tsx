"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import useLocalStorage from "hooks/useLocalStorage";

export default function Page({ searchParams }: any) {
  const { access_token, refresh_token } = searchParams;
  console.log(searchParams);
  const [accessToken, setAccessToken] = useLocalStorage<string | null>(
    "access_token",
    null
  );

  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>(
    "refresh_token",
    null
  );
  const [a, fa] = useLocalStorage<string | null>("refresh_token22", null);
  const dsa = "1";
  console.log(refreshToken);
  useEffect(() => {
    setAccessToken(access_token.replace(/'/g, ""));
    setRefreshToken(refresh_token.replace(/'/g, ""));
  }, []);

  useEffect(() => {
    if (accessToken) {
      return redirect("/userinfo");
    }
  }, [accessToken, refreshToken]);

  return <div className="w-full min-h-screen h-full flex bg-white">2</div>;
}
