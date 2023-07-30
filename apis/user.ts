import customAxios from "apis";

export async function fetchUserType() {
  const res = await customAxios.get("/user-user/user_type");
  return res;
}

export async function fetchURLDuplication(url: any) {
  const res = await customAxios.get(`/user-user/check/page/${url}`);
  return res;
}

export async function fetchReport({ url, gender, age }: any) {
  const res = await customAxios.post(`/user-user/report`, {
    page_url: url,
    gender: gender,
    age: Number(age),
  });
  return res;
}

export async function fetchProfile() {
  const res = await customAxios.get(`/user-user/profile`);
  return res;
}

export async function SaveProfile(
  nickname: any,
  explanation: any,
  todayLink: any
) {
  const res = await customAxios.patch(`/user-user`, {
    nickname,
    explanation,
    today_link: todayLink,
  });
  return res;
}

export async function changeTodayLink(id: any) {
  const res = await customAxios.patch(`/user-user/update/todayLink/${id}`);
  return res;
}
