import customAxios from 'src/apis';

export async function fetchUserType() {
  const res = await customAxios.get<null, any>('/user-user/user_type');
  return res;
}

export async function fetchURLDuplication(url: any) {
  const res = await customAxios.get<null, any>(`/user-user/check/page/${url}`);
  return res;
}

export async function fetchReport({ url, gender, age }: any) {
  const res = await customAxios.post<null, any>(`/user-user/report`, {
    page_url: String(url),
    gender: String(gender),
    age: Number(age),
  });
  return res;
}

export async function fetchProfile() {
  const res = await customAxios.get<null, any>(`/user-user/profile`);
  return res;
}

export async function SaveProfile(
  nickname: any,
  explanation: any,
  todayLink: any,
  formData: any,
  actions: any,
) {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  const res = await customAxios.patch<null, any>(
    `/user-user/profile`,
    {
      nickname,
      explanation,
      today_link: todayLink,
      formData,
      actions,
    },
    { headers },
  );
  return res;
}

export async function changeTodayLink(id: any) {
  const res = await customAxios.patch<null, any>(
    `/user-user/update/todayLink/${id}`,
  );
  return res;
}
