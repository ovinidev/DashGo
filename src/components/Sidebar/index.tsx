import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useSidebar } from "../../contexts/useSidebar";

import { SidebarNav } from "./SidebarNav";

export const Sidebar = () => {
  const { isOpen, onClose, isMobile } = useSidebar()

  {
    return isMobile ? (
      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg='gray.800' p='4'>
            <DrawerCloseButton mt='4' />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>

            <DrawerFooter alignSelf='center'>Vini 2022</DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    ) : (
      <Flex
        as='aside'
        w='64'
        direction='column'
      >
        <SidebarNav />
      </Flex>
    )
  }
};
