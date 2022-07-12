import { Stack } from "@chakra-ui/react";
import { Link } from "./Link";
import { Section } from "./Section";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from "react-icons/ri";
import { useRouter } from "next/router";

export const SidebarNav = () => {
  const { asPath } = useRouter()
  
  return (
    <Stack spacing='12'>
      <Section title='Geral'>
        <Link
          title='Dashboard'
          icon={RiDashboardLine}
          href={'/dashboard'}
          asPath={asPath}
        />
        <Link
          title='Usuários'
          icon={RiContactsLine}
          href={'/users'}
          asPath={asPath}
        />
      </Section>

      <Section title='Automação'>
        <Link
          title='formulários'
          icon={RiInputMethodLine}
          href={'forms'}
          asPath={asPath}
        />
        <Link
          title='Automação'
          icon={RiGitMergeLine}
          href={'/automation'}
          asPath={asPath}
        />
      </Section>
    </Stack>
  );
};
