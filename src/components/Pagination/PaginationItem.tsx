import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number,
  isCurrent?: boolean,
  onClick: () => void
}

export const PaginationItem = ({ number, isCurrent, onClick }: PaginationItemProps) => {
  return (
    <>
      {
        isCurrent ? (
          <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme='pink'
            disabled
            _disabled={{
              bg: 'pink.500',
              cursor: 'not-allowed'
            }}
            onClick={onClick}
          >
            {number}
          </Button>
        ) : (
          <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme='gray.700'
            _hover={{
              bg: 'gray.500'
            }}
            onClick={onClick}
          >
            {number}
          </Button>
        )
      }
    </>
  )
};
