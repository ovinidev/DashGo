import { Flex, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from "react-icons/ri";
import { Link } from "./Link";
import { Section } from "./Section";

export const Sidebar = () => {
  return (
    <Flex
      as='aside'
      w='64'
      direction='column'
    >
      <Stack spacing='12'>
        <Section title='Geral'>
          <Link title='Dashboard' icon={RiDashboardLine} />
          <Link title='Usuários' icon={RiContactsLine} />
        </Section>

        <Section title='Automação'>
          <Link title='formulários' icon={RiInputMethodLine} />
          <Link title='Automação' icon={RiGitMergeLine} />
        </Section>
      </Stack>
    </Flex>
  );
};
