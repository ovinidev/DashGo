import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { useSidebar } from "../../context/useSidebar";
import { PaginationItem } from "./PaginationItem";

export const Pagination = () => {
  const [page, setPage] = useState(1);
  const { onOpen, isMobile, isDesktop } = useSidebar();

  const handlePage = (number: number) => {
    setPage(number)
  }
  return (
    <Flex
      mt='8'
      justify='space-between'
      align='center'
      flexDirection={{base: 'column', lg: 'row'}}
    >
      <Box>
        <strong>0</strong> - <strong>de</strong> <strong>100</strong>
      </Box>
      <HStack spacing='2'>
        <PaginationItem number={1} isCurrent={1 === page} onClick={() => handlePage(1)} />
        <PaginationItem number={2} isCurrent={2 === page} onClick={() => handlePage(2)} />
        <PaginationItem number={3} isCurrent={3 === page} onClick={() => handlePage(3)} />
        <PaginationItem number={4} isCurrent={4 === page} onClick={() => handlePage(4)} />
      </HStack>
    </Flex>
  );
};
