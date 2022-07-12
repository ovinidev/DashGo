import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { ElementType } from "react";
import NextLink from 'next/link';

interface LinkProps extends ChakraLinkProps {
  title: string,
  icon: ElementType,
  href: string,
  asPath: string
}


export const Link = ({ title, icon, href, asPath, ...rest }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        display='flex'
        w='10rem'
        color={asPath === href ? 'pink.500' : ''}
        {...rest}>
        <Icon as={icon} fontSize='20' />
        <Text ml='4' fontWeight='medium'>{title}</Text>
      </ChakraLink>
    </NextLink>
  );
};
