import { Box, Text } from "@chakra-ui/react";
import { GetServerSideProps } from "next";

export default function Slug({ post, slug }: any) {
  return (
    <Box>
      <Text>{post}</Text>
      <Text>{slug}</Text>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { slug } = params!;

  const post = 'SERVER SIDE RENDERING';

  return {
    props: {
      post,
      slug
    }
  };
};