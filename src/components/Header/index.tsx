import { Flex } from "@chakra-ui/react";
import { InputSearch } from "../Form/InputSearch";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";

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
      <Logo />
      <InputSearch />

      <Flex
        align='center'
        ml='auto'
      >
        <Notification />
        <Profile />
      </Flex>

    </Flex>
  );
};
