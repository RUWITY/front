import customAxios from "apis";

export async function fetchUserType() {
  return await customAxios.get("/user-user/user_type");
}
