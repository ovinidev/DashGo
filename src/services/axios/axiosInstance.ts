import axios from 'axios';
import { IUsersMirage } from '../../interfaces/users';

export const axiosInstance = axios.create({
  baseURL: 'mirage'
});

export const getUsers = async (page: number) => {
  const { data, headers } = await axiosInstance.get<IUsersMirage>('users', {
    params: {
      page: page,
    }
  });
  
  const { users } = data;
  const totalItems = Number(headers['x-total-count']);

  return {
    users,
    totalItems
  }
}