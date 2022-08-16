import { Text } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Text
      as="h1"
      fontSize={['2xl', '3xl']}
      fontWeight="bold"
      letterSpacing="tight"
      w={256}
    >
      Dashgo
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
};
