import customAxios from 'src/apis';
import axios from 'axios';

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

export async function fetchTYoutube(id: any) {
  const noEmbed = 'https://noembed.com/embed?url=';
  const urlForm = 'https://www.youtube.com/watch?v=';

  const full_url = noEmbed + urlForm + id;
  const res = await axios.get(full_url);

  return res;
}
