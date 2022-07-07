import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string,
  label?: string,
  type: string,
}

export const Input = ({ name, label, ...rest }: InputProps) => {
  return (
    <FormControl>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor='gray.900'
        variant='filled'
        _hover={{
          filter: 'brightness(0.9)'
        }}
        size='lg'
        {...rest}
      />
    </FormControl>
  );
};
