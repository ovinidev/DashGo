import {
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import { LOGIN_WIDTH } from "../constants/widthScreen";

interface LoginInputs {
  email: string,
  password: string,
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data)
  };

  console.log(watch("email"))

  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        onSubmit={handleSubmit(onSubmit)}
        width='100%'
        maxWidth={LOGIN_WIDTH}
        bg='gray.800'
        p='10'
        borderRadius={8}
        flexDir='column'
      >
        <Stack spacing='4'>
          <Input
            {...register("email", { required: true })}
            name="email"
            type="email"
            label="Email"
          />
          <Input
            {...register("password", { required: true })}
            name="password"
            type="password"
            label="Senha"
          />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
