import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SidebarContextProvider } from '../components/context/useSidebar'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarContextProvider>
        <Component {...pageProps} />
      </SidebarContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
