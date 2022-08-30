import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { IUsers } from '../../interfaces/users';

export default function Example() {
  const { asPath } = useRouter();
  const pageId = asPath.split('/')[2];

  const { data } = useQuery<IUsers>(['users', { id: pageId }], {
    staleTime: 1000 * 5,
  });

  return (
    <Flex h="100vh" align="center" justify="center">
      <Box>
        <Heading>Detalhes</Heading>
        <Text>{data?.name}</Text>
        <Text>{data?.email}</Text>
        <Text>{data?.created_at}</Text>
      </Box>
    </Flex>
  );
}
