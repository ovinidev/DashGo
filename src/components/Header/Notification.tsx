import { HStack, Icon } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export const Notification = () => {
  return (
    <HStack
      spacing={['0', '2', '4', '6', '8']}
      mr={['0', '2', '4', '6', '8']}
      pr={['0', '2', '4', '6', '8']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize={20} />
      <Icon as={RiUserAddLine} fontSize={20} />
    </HStack>
  );
};
