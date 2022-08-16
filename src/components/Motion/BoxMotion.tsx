import { chakra, BoxProps } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { ReactNode } from 'react';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === 'children',
});

interface BoxMotionProps extends BoxProps {
  children: ReactNode;
}

export const BoxMotion = ({ children, ...rest }: BoxMotionProps) => {
  return (
    <ChakraBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // @ts-ignore no problem in operation, although type error appears.
      transition={{
        duration: 0.7,
        ease: 'easeIn',
      }}
      {...rest}
    >
      {children}
    </ChakraBox>
  );
};
