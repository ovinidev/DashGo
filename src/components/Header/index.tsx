import { Flex } from "@chakra-ui/react";
import { useSidebar } from "../../contexts/useSidebar";
import { InputSearch } from "../Form/InputSearch";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";

import { FLEX_WIDTH } from "../../constants/widthScreen";
import { Hamburger } from "./Hamburger";

export const Header = () => {
  const { isMobile, isDesktop } = useSidebar();

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={FLEX_WIDTH}
      mx='auto'
      h='20'
      mt='4'
      align="center"
      px='6'
    >
      {isMobile && <Hamburger />}
      <Logo />
      {isDesktop && <InputSearch />}

      <Flex
        align='center'
        ml='auto'
      >
        <Notification />
        <Profile showProfileData={isDesktop} />
      </Flex>
    </Flex>
  );
};
