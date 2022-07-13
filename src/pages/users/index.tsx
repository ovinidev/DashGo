import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { useSidebar } from "../../context/useSidebar";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";
import { UserItem } from "../../components/UserItem";
import NextLink from 'next/link'
import { FLEX_WIDTH } from "../../constants/widthScreen";

export default function Users() {
  const { isDesktop } = useSidebar();

  return (
    <Box>
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
                Cria novo
              </Button>
            </NextLink>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px={['0', '2', '4', '6']} color='gray.300' w='8'>
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
              <UserItem
                name='Vinicius Medeiros'
                email='vinimedeiros@gmail.com'
                isDesktop={isDesktop}
                date='14 de abril 2022'
              />
              <UserItem
                name='Vinicius Medeiros'
                email='vinimedeiros@gmail.com'
                isDesktop={isDesktop}
                date='14 de abril 2022'
              />
              <UserItem
                name='Vinicius Medeiros'
                email='vinimedeiros@gmail.com'
                isDesktop={isDesktop}
                date='14 de abril 2022'
              />
              <UserItem
                name='Vinicius Medeiros'
                email='vinimedeiros@gmail.com'
                isDesktop={isDesktop}
                date='14 de abril 2022'
              />
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}