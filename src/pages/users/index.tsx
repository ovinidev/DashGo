import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";

export default function Users() {
  return (
    <Box>
      <Header />

      <Flex my='6' w='100%' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg={'gray.800'} p='8'>
          <Flex mb='8' justify='space-between' align='center'>
            <Title text='Usuários' />

            <Button
              as='a'
              size='sm'
              fontSize='sm'
              colorScheme='pink'
              leftIcon={<Icon fontSize='20' as={RiAddLine} />}
            >
              Cria novo
            </Button>
          </Flex>

          <Table colorScheme='whiteAlpha'>
            <Thead>
              <Tr>
                <Th px='6' color='gray.300' w='8'>
                  <Checkbox colorScheme='pink' />
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th>
                  Data de cadastro
                </Th>
                <Th w='8'></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px='6'>
                  <Checkbox colorScheme='pink' />
                </Td>
                <Td px='6'>
                  <Box>
                    <Text fontWeight='bold'>Vinicius Medeiros</Text>
                    <Text fontSize='sm' color='gray.300'>vini@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de abril, 2021</Td>
                <Td>
                  <Button
                    size='sm'
                    fontSize='sm'
                    colorScheme='whiteAlpha'
                    leftIcon={<Icon fontSize='20' as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}