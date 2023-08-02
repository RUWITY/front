import customAxios from 'src/pages/apis';

export async function fetchUrlHistory() {
  const res = await customAxios.get('/user-url/all');
  return res;
}

export async function AddUrlView(id: any) {
  const res = await customAxios.patch(`/user-url/${id}`);

  return res;
}

export async function fetchUrl(id: any) {
  const res = await customAxios.get(`/${id}`);

  return res;
}
