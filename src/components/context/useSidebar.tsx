import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarContextData {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  isDrawerSidebar: boolean | undefined
}

interface SidebarProviderProps {
  children: ReactNode
}

const SidebarContext = createContext({} as SidebarContextData);

export const SidebarContextProvider = ({ children }: SidebarProviderProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  const { asPath } = useRouter();

  useEffect(() => {
    onClose()
  }, [asPath])

  return (
    <SidebarContext.Provider value={{
      isOpen,
      onOpen,
      onClose,
      isDrawerSidebar
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  return context
}