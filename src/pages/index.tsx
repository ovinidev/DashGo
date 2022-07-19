import {
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../components/Form/Input";
import { LOGIN_WIDTH } from "../constants/widthScreen";
import { loginSchema } from "../validation/schema";
import { LoginInputs } from "../interfaces/hookForm";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data)
  };

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
            {...register("email")}
            name="email"
            type="email"
            label="Email"
            errors={errors.email}
          />
          <Input
            {...register("password")}
            name="password"
            type="password"
            label="Senha"
            errors={errors.password}
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
