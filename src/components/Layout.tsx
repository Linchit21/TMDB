import { Container } from "@components/Container";
import { Main } from "@components/Main";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Container>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}
