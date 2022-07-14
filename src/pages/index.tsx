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
import { useEffect, useState } from "react";
import { Data, getUsers } from "../api";
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
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema)
  });
  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data)
  };

  const [userData, setUserData] = useState<Data[]>([])

  console.log(userData)

  userData.map(item => {
    console.log(item.name);
    
  })

  useEffect(() => {
    (async function get() {
      try {
        const data = await getUsers();
        setUserData(data)
      } catch (err: any) {
        console.log(err);
      }
    }())
  }, [])


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
