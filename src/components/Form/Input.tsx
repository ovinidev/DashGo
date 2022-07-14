import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string,
  label?: string,
  type: string,
  errors?: FieldError,
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, errors, ...rest }, ref: any) => {
  return (
    // !!errors significa que se tiver conteúdo é true, transformando em booleano
    <FormControl isInvalid={!!errors}>
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
        ref={ref}
        {...rest}
      />
      {errors &&
        <FormErrorMessage>
          {errors.message}
        </FormErrorMessage>
      }
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
