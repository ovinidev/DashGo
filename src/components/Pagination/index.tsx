import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { usePagination } from '../../hooks/usePagination';
import { PaginationItem } from './PaginationItem';

export const Pagination = () => {
  const {
    currentPage,
    siblingsCount,
    lastPage,
    totalCountOfRegisters,
    previousPages,
    nextPages,
  } = usePagination();

  return (
    <Flex
      mt="8"
      justify="space-between"
      align="center"
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Box mb={{ base: 1, lg: 0 }}>
        <strong>{currentPage}</strong> - <strong>de</strong>{' '}
        <strong>{totalCountOfRegisters}</strong>
      </Box>
      <HStack spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text w="4" textAlign="center" color="gray.300">
                ...
              </Text>
            )}
          </>
        )}
        {previousPages.length > 0 &&
          previousPages.map((page) => {
            return <PaginationItem key={page} number={page} />;
          })}
        <PaginationItem number={currentPage} isCurrent />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem key={page} number={page} />;
          })}
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text w="4" textAlign="center" color="gray.300">
                ...
              </Text>
            )}
            <PaginationItem number={lastPage} />
          </>
        )}
      </HStack>
    </Flex>
  );
};
