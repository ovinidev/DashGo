import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'api'
});

export const getUsers = async () => {
  const { data } = await axiosInstance.get('/users');

  return data;
}