import axios from 'axios';
import { CreateUserInput } from '../../interfaces/hookForm';
import { IUserMirage, IUsersMirage } from '../../interfaces/users';

export const axiosInstance = axios.create({
  baseURL: '/mirage'
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

export const getUsersById = async (id: string) => {
  const { data } = await axiosInstance.get<IUserMirage>(`users/${id}`);

  return data.user;
}

export const createUser = async (user: CreateUserInput) => {
  const { data } = await axiosInstance.post('users', {
    user: {
      ...user,
      created_at: new Date(),
    }
  });

  return data;
}
