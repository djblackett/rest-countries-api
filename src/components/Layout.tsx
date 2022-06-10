import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = React.memo(() => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
});

export default Layout;
