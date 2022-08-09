import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../services/axios/axiosInstance';

export const getUsersList = async () => {
  const data = await getUsers();

  const users = data.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
    }
  })

  return users;
};

export const useUsers = () => {
  return useQuery(['users'], getUsersList, {
    staleTime: 1000 * 5 // 5 seconds,
  });
};