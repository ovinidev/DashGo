import axios from 'axios';
import { IUsersMirage } from '../../interfaces/users';

export const axiosInstance = axios.create({
  baseURL: 'api'
});

export const getUsers = async () => {
  const { data } = await axiosInstance.get<IUsersMirage>('users');
  
  return data.users;
}