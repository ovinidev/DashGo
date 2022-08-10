import { Box, Button, Checkbox, Icon, Td, Text, Tr } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { useSidebar } from "../../hooks/useSidebar";

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
      <Td px={{ base: '0', sm: '2', lg: '4' }}>
        <Checkbox colorScheme='pink' />
      </Td>
      <Td px={{ base: '0', sm: '2', lg: '4' }}>
        <Box>
          <Text fontWeight='bold' fontSize={['2xs', 'sm', 'md']}>{name}</Text>
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
