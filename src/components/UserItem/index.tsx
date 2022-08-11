import { Box, Button, Checkbox, Icon, Link, Td, Text, Tr } from "@chakra-ui/react";
import { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import { useSidebar } from "../../hooks/useSidebar";
import { IUsers } from "../../interfaces/users";
import { getUsersById } from "../../services/axios/axiosInstance";
import { queryClient } from "../../services/queryClient";

interface UserItemProps {
  name: string,
  email: string,
  date: string,
  id: string
}

export const UserItem = (
  {
    name,
    email,
    date,
    id,
  }: UserItemProps) => {
  const { isDesktop } = useSidebar();

  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(['users', { id: userId }], async () => {
      const response = await getUsersById(userId);

      return response;
    }, {
      staleTime: 1000 * 60 * 10, // 10 minutos
    })
  }

  return (
    <Tr>
      <Td px={{ base: '0', sm: '2', lg: '4' }}>
        <Checkbox colorScheme='pink' />
      </Td>
      <Td px={{ base: '0', sm: '2', lg: '4' }}>
        <Box>
          <Link color='purple.400' onMouseEnter={() => handlePrefetchUser(id)}>
            <Text fontWeight='bold' fontSize={['2xs', 'sm', 'md']}>{name}</Text>
          </Link>
          <Text fontSize={['1xs', '2xs', 'sm']} color='gray.300'>{email}</Text>
        </Box>
      </Td>
      {isDesktop &&
        <Td>{date}</Td>
      }
      <Td px={{ base: 0 }}>
        <Button
          size='sm'
          fontSize='sm'
          colorScheme='whiteAlpha'
          px={{ base: 0, lg: '2' }}
          leftIcon={<Icon ml={{ base: '7px', xl: '7px', '2xl': 0 }} fontSize='20' as={RiPencilLine} />}
        >
          {isDesktop && 'Editar'}
        </Button>
      </Td>
    </Tr>
  );
};
