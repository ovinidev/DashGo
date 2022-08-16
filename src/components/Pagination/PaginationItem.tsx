import { Button } from '@chakra-ui/react';
import { usePagination } from '../../hooks/usePagination';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export const PaginationItem = ({ number, isCurrent }: PaginationItemProps) => {
  const { setCurrentPage } = usePagination();

  return (
    <>
      {isCurrent ? (
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: 'pink.500',
            cursor: 'not-allowed',
          }}
        >
          {number}
        </Button>
      ) : (
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="gray.700"
          _hover={{
            bg: 'gray.500',
          }}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </Button>
      )}
    </>
  );
};
