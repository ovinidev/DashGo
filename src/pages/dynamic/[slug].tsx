import { Box, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

interface DynamicProps {
  post: string;
  slug: string;
}

export default function Slug({ post, slug }: DynamicProps) {
  return (
    <Box>
      <Text>{post}</Text>
      <Text>{slug}</Text>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params!;

  const post = 'SERVER SIDE RENDERING';

  return {
    props: {
      post,
      slug,
    },
  };
};
