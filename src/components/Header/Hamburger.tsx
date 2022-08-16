import { Icon, IconButton } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebar } from '../../hooks/useSidebar';

export const Hamburger = () => {
  const { onOpen } = useSidebar();

  return (
    <IconButton
      icon={<Icon as={GiHamburgerMenu} />}
      variant="unstyled"
      fontSize="2rem"
      onClick={onOpen}
      aria-label="open navigation"
      mr={['0', '2', '6', '8']}
    />
  );
};
