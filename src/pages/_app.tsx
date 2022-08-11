import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { SidebarContextProvider } from '../hooks/useSidebar'
import { makeServer } from '../services/mirage'
import { theme } from '../styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PaginationProvider } from '../hooks/usePagination'
import { queryClient } from '../services/queryClient'

makeServer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <ChakraProvider theme={theme}>
        <SidebarContextProvider>
          <PaginationProvider>
            <Component {...pageProps} />
          </PaginationProvider>
        </SidebarContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
