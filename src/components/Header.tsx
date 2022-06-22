import { Flex, Text, Input, Icon } from "@chakra-ui/react";
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
        w='64'
      >
        Dashgo
        <Text as='span' color='pink.500' ml='1'>.</Text>
      </Text>

      <InputSearch />

    </Flex>
  );
};
