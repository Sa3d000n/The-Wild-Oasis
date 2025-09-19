import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Header from "./Header";
const Main = styled.main`
  background-color: var(--color-grey-5B0);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: var(--color-grey-50);
`;
const Conatiner = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Conatiner>
          <Outlet />
        </Conatiner>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
