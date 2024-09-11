import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import TabBar from "./TabNavigation/TabBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Navigation>
        <TabBar />
      </Navigation>
    </>
  )
}

export default Layout

const Content = styled.div`
min-height: calc(100vh - 70px);
`

const Navigation = styled.div`
position: absolute;
top: 20%;
left: 0;
`