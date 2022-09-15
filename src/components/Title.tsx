import { Heading, HeadingProps } from '@chakra-ui/react';

interface TitleProps extends HeadingProps {
  text: string;
}

export const Title = ({ text, ...rest }: TitleProps) => {
  return (
    <Heading size="lg" fontWeight="normal" {...rest}>
      {text}
    </Heading>
  );
};
