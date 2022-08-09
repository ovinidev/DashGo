/* eslint-disable react-hooks/exhaustive-deps */
import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarContextData {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  isMobile: boolean | undefined,
  isDesktop: boolean | undefined
}

interface SidebarProviderProps {
  children: ReactNode
}

const SidebarContext = createContext({} as SidebarContextData);

export const SidebarContextProvider = ({ children }: SidebarProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isMobile = useBreakpointValue({
    base: true,
    '2xl': false
  })

  const isDesktop = useBreakpointValue({
    base: false,
    '2xl': true
  })

  const { asPath } = useRouter();

  useEffect(() => {
    onClose()
  }, [asPath, isMobile])

  return (
    <SidebarContext.Provider value={{
      isOpen,
      onOpen,
      onClose,
      isMobile,
      isDesktop
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  return context
}