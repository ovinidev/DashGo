import { chakra, Flex, FlexProps } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { ReactNode } from 'react';

const ChakraFlex = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

interface FlexMotionProps extends FlexProps {
  children: ReactNode;
}

export const FlexMotion = ({ children, ...rest }: FlexMotionProps) => {
  return (
    <ChakraFlex
      display="flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.6,
        ease: 'easeIn',
      }}
      {...rest}
    >
      {children}
    </ChakraFlex>
  );
};
