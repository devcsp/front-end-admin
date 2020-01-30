import api from 'config/api';

export async function tryAuthenticate({ email, password }) {
  const responseFromApi = await api.post('/login', { email, password });

  if (responseFromApi.status !== 200) return;
  return responseFromApi.data;
}
