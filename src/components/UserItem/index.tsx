import { Box, Button, Checkbox, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { useSidebar } from "../../contexts/useSidebar";

interface UserItemProps {
  name: string,
  email: string,
  date: string,
}

export const UserItem = (
  {
    name,
    email,
    date,
  }: UserItemProps) => {
  const { isDesktop } = useSidebar();

  return (
    <Tr>
      <Td px={['0', '2', '4', '6']}>
        <Checkbox colorScheme='pink' />
      </Td>
      <Td px={['0', '2', '4', '6']}>
        <Box>
          <Text fontWeight='bold' fontSize={['2xs', 'sm','md']}>{name}</Text>
          <Text fontSize={['1xs','2xs','sm']} color='gray.300'>{email}</Text>
        </Box>
      </Td>
      {isDesktop &&
        <Td>{date}</Td>
      }
      <Td>
        <Button
          size='sm'
          fontSize='sm'
          colorScheme='whiteAlpha'
          leftIcon={<Icon fontSize='20' as={RiPencilLine} />}
        >
          {isDesktop && 'Editar'}
        </Button>
      </Td>
    </Tr>
  );
};
