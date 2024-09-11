import styled from "styled-components";
import { Header } from "./Header";
import TabBar from "./TabNavigation/TabBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Navigation>
        <TabBar />
      </Navigation>
    </Container>
  )
}

export default Layout

const Container = styled.div`
display: flex;
flex-direction: column;
gap: 28px;
`

const Content = styled.div`
min-height: calc(100vh - 98px);
`

const Navigation = styled.div`
position: absolute;
top: 20%;
left: 0;
`