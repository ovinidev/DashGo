import { Flex, Icon, IconButton } from "@chakra-ui/react";
import { useSidebar } from "../../context/useSidebar";
import { InputSearch } from "../Form/InputSearch";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import {
  GiHamburgerMenu
} from "react-icons/gi";
import { FLEX_WIDTH } from "../../constants/widthScreen";

export const Header = () => {
  const { onOpen, isMobile, isDesktop } = useSidebar();

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
      {isMobile &&
        <IconButton
          icon={<Icon as={GiHamburgerMenu} />}
          variant='unstyled'
          fontSize='2rem'
          onClick={onOpen}
          aria-label='open navigation'
          mr={['0','2', '6', '8']}
        />
      }
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
