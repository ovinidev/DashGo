import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useSidebar } from "../../contexts/useSidebar";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";
import { UserItem } from "../../components/UserItem";
import NextLink from 'next/link'
import { FLEX_WIDTH } from "../../constants/widthScreen";
import { useQuery } from '@tanstack/react-query'
import { BoxMotion } from "../../components/Motion/BoxMotion";
import { IUsers } from "../../interfaces/users";
import { getUsers } from "../../services/axios/axiosInstance";

export default function Users() {
  const { isDesktop } = useSidebar();

  const { data, isLoading, error } = useQuery(['users'], async () => {
    const data = await getUsers();

    return data;
  });

  return (
    <BoxMotion>
      <Header />
      <Flex my='6' w='100%' maxWidth={FLEX_WIDTH} mx='auto' px='6'>
        <Sidebar />

        <Box w='100%' borderRadius={8} bg={'gray.800'} p={['2', '4', '6', '8']}>
          <Flex mb='8' justify='space-between' align='center'>
            <Title text='Usuários' />

            <NextLink href='/users/create' passHref>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                leftIcon={<Icon fontSize='20' as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify='center' align='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center' align='center'>
              <Text>Deu erro ao pegar os dados</Text>
            </Flex>
          ) : (
            (
              <>
                <Table colorScheme='whiteAlpha'>
                  <Thead>
                    <Tr>
                      <Th px={{ base: '0', sm: '2', lg: '4' }} color='gray.300' w='8'>
                        <Checkbox colorScheme='pink' />
                      </Th>
                      <Th>
                        Usuário
                      </Th>
                      {isDesktop &&
                        <Th>
                          Data de cadastro
                        </Th>
                      }
                      <Th w='8'></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.users.map((user: IUsers) => {
                      return (
                        <UserItem
                          key={user.id}
                          name={user.name}
                          email={user.email}
                          date={user.createdAt}
                        />
                      )
                    })}
                  </Tbody>
                </Table>
                <Pagination />
              </>
            ))}
        </Box>
      </Flex>
    </BoxMotion>
  )
}