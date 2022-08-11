import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../services/axios/axiosInstance';
import { usePagination } from './usePagination';

export const useUsers = () => {
  const { currentPage, setTotalCountOfRegisters } = usePagination();

  return useQuery(['users', { page: currentPage }], async () => {
    const { users, totalItems } = await getUsers(currentPage);
    setTotalCountOfRegisters(totalItems);

    const usersList = users.map(user => {
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

    return usersList;
  }, {
    staleTime: 1000 * 60 * 10, // 10 minutos
  });
};
