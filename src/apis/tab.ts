import customAxios from 'src/apis';

export async function createTabText() {
  const res = await customAxios.post('/user-tap/text');
  return res;
}

export async function createTabLink() {
  const res = await customAxios.post('/user-tap/link');
  return res;
}

export async function fetchTabList() {
  const res = await customAxios.get('/user-tap/all');
  return res;
}
