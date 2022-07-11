import { Stack } from "@chakra-ui/react";
import { Link } from "./Link";
import { Section } from "./Section";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from "react-icons/ri";

export const SidebarNav = () => {
  return (
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
  );
};
