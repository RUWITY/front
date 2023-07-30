import customAxios from "apis";

export async function signin() {
  return await customAxios.get("/kakao-login/login");
}
