import {
  Flex,
  Icon,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react";

import { RiSearchLine } from 'react-icons/ri'

interface InputProps extends ChakraInputProps {
}

export const InputSearch = ({ ...rest }: InputProps) => {
  return (
    <Flex
      as='label'
      py='4'
      px='8'
      ml='6'
      width={400}
      alignSelf='center'
      color='gray.200'
      position='relative'
      bg='gray.800'
      borderRadius='full'
      align='center'
    >
      <ChakraInput
        color='gray.50'
        variant='unstyled'
        mr='4'
        placeholder='Buscar na plataforma'
        _placeholder={{ color: 'gray.400' }}
        {...rest}
      />
      <Icon as={RiSearchLine} fontSize='20' />
    </Flex>
  );
};
