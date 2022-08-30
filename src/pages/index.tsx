import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../components/Form/Input';
import { LOGIN_WIDTH } from '../constants/widthScreen';
import { loginSchema } from '../validation/schema';
import { LoginInputs } from '../interfaces/hookForm';
import { FlexMotion } from '../components/Motion/FlexMotion';
import { useRouter } from 'next/router';

export default function SignIn() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
    router.push('/users');
  };

  return (
    <FlexMotion w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        width={{ base: '80%', lg: '100%' }}
        maxWidth={LOGIN_WIDTH}
        bg="gray.800"
        p="10"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input
            {...register('email')}
            type="email"
            label="Email"
            errors={errors.email}
          />
          <Input
            {...register('password')}
            type="password"
            label="Senha"
            errors={errors.password}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={isSubmitting}
          w={{ base: '80%', lg: '100%', nb: '20%' }}
          alignSelf="center"
        >
          Entrar
        </Button>
      </Flex>
    </FlexMotion>
  );
}
