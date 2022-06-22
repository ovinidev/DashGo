import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <Flex
      as='aside'
      w='64'
      direction='column'
    >
      <Stack spacing='12'>
        <Box>
          <Text
            fontWeight='bold'
            color='gray.400'
            fontSize='small'
            textTransform='uppercase'
          >
            Geral
          </Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'
          >
            <Link display='flex'>
              <Icon as={RiDashboardLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Dashboard</Text>
            </Link>
            <Link display='flex'>
              <Icon as={RiContactsLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Usuários</Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text
            fontWeight='bold'
            color='gray.400'
            fontSize='small'
            textTransform='uppercase'
          >
            Automação
          </Text>
          <Stack
            spacing='4'
            mt='8'
            align='stretch'
          >
            <Link display='flex'>
              <Icon as={RiInputMethodLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Formulários</Text>
            </Link>
            <Link display='flex'>
              <Icon as={RiGitMergeLine} fontSize='20' />
              <Text ml='4' fontWeight='medium'>Automação</Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
