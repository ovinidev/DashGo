import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface LinkProps extends ChakraLinkProps {
  title: string,
  icon: ElementType
}


export const Link = ({ title, icon, ...rest }: LinkProps) => {
  return (
    <ChakraLink display='flex' {...rest}>
      <Icon as={icon} fontSize='20' />
      <Text ml='4' fontWeight='medium'>{title}</Text>
    </ChakraLink>
  );
};
