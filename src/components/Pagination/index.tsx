import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { useSidebar } from "../../contexts/useSidebar";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number,
  registerPerPage?: number,
  currentPage?: number,
  onPageChange: (page: number) => void,
}

export const Pagination = ({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const siblingsCount = 1

  const generatePagesArray = (from: number, to: number) => {
    return [...new Array(siblingsCount)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
  }

  const previousPage = currentPage > 1 
  ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
  : [];

  const [page, setPage] = useState(1);

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
