import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";

import { RiSearchLine } from 'react-icons/ri'

export const InputSearch = () => {
  return (
    <InputGroup
      as='label'
      pl='8'
      ml='6'
      w={400}
      h={50}
      color='gray.200'
      bg='gray.800'
      borderRadius='full'
      size='lg'
    >
      <Input
        color='gray.50'
        variant='unstyled'
        mr='4'
        placeholder='Buscar na plataforma'
        _placeholder={{ color: 'gray.400' }}
      />
      <InputRightElement>
        <Icon as={RiSearchLine} fontSize='20' mr='4'/>
      </InputRightElement>
    </InputGroup>
  );
};
