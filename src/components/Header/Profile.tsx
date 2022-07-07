import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export const Profile = () => {
  return (
    <Flex
      align='center'
    >
      <Box mr='4'>
        <Text>Vinicius Medeiros</Text>
        <Text color='gray.300' fontSize='small'>Vinicius Medeiros</Text>
      </Box>
      <Avatar
        size='md'
        name='Vinicius Medeiros'
        src='https://github.com/vinimedeiros13.png' />
    </Flex>
  );
};
