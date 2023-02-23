import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setAuthHeader = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const postSignup = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  return result;
};

export const postLogin = async data => {
  const { data: result } = await instance.post('/users/login', data);
  return result;
};

export const postLogout = async () => {
  const { data: result } = await instance.post('/users/logout');
  clearAuthHeader();
  return result;
};

export const getUser = async token => {
  try {
    setAuthHeader(token);

    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    clearAuthHeader();
    throw error;
  }
};
