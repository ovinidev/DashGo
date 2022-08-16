import { Box, Stack, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export const Section = ({ title, children }: SectionProps) => {
  return (
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
