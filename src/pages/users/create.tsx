import { Box, Button, Divider, Flex, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Title } from "../../components/Title";
import NextLink from 'next/link'
import { FLEX_WIDTH } from "../../constants/widthScreen";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserSchema } from "../../validation/schema";
import { CreateUserInput } from "../../interfaces/hookForm";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserInput>({
    resolver: yupResolver(createUserSchema)
  });
  const onSubmit = (data: CreateUserInput) => console.log(data);

  return (
    <Box>
      <Header />

      <Flex my='6' w='100%' maxWidth={FLEX_WIDTH} mx='auto' px='6'>
        <Sidebar />

        <Box
          as='form'
          onSubmit={handleSubmit(onSubmit)}
          w='100%'
          borderRadius={8}
          bg={'gray.800'}
          p='8'
        >
          <Title text='Criar usuário' />

          <Divider my='6' borderColor='gray.700' />

          <Stack spacing='8'>
            <SimpleGrid minChildWidth='200px' gap='8' w='100%'>
              <Input
                label='Nome completo'
                type='text'
                {...register('name')}
                errors={errors.name}
              />
              <Input
                label='Email'
                type='email'
                {...register('email')}
                errors={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth='200px' gap='8' w='100%'>
              <Input
                label='Senha'
                type='password'
                {...register('password')}
                errors={errors.password}
              />
              <Input
                label='Confirmar senha'
                type='password'
                {...register('passwordConfirm')}
                errors={errors.passwordConfirm}
              />
            </SimpleGrid>
          </Stack>

          <HStack
            spacing='4'
            mt='8'
            justify={{ base: 'center', lg: 'flex-end' }}>
            <NextLink href='/users' passHref>
              <Button colorScheme='whiteAlpha'>Cancelar</Button>
            </NextLink>

            <Button type='submit' colorScheme='pink'>Salvar</Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}