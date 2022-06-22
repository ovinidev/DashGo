import { Flex, Text, Input, Icon, Button, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";
import { InputSearch } from "./Form/InputSearch";

export const Header = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h='20'
      mx='auto'
      mt='4'
      align="center"
      px='6'
    >
      <Text
        as='h1'
        fontSize='3xl'
        fontWeight='bold'
        letterSpacing='tight'
        w={256}
      >
        Dashgo
        <Text as='span' color='pink.500' ml='1'>.</Text>
      </Text>

      <InputSearch />

      <Flex
        align='center'
        ml='auto'
      >
        <HStack
          spacing='8'
          mr='8'
          pr='8'
          py='1'
          color='gray.300'
          borderRightWidth={1}
          borderColor='gray.700'
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>

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
      </Flex>

    </Flex>
  );
};
