import React from "react";
import { Outlet } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import {
  SideInfo,
  Footer,
  Navbar,
  NavbarMobile,
  TopNav,
  LeftSide,
} from "../Components";
import "./style.css";

const Layout = () => {
  const matches = useMediaQuery("(max-width:1000px)");
  const [mobileBar, setMobileBar] = useState(true);

  return (
    <>
      {matches ? (
        <NavbarMobile mobileBar={mobileBar} setMobileBar={setMobileBar} />
      ) : (
        <>
          <Container maxWidth="xl" className="container">
            <TopNav />
            <Navbar />
          </Container>
        </>
      )}
      <Container maxWidth="xl" className="container">
        <Stack direction="row" gap="0 10px">
          <SideInfo />
          <Outlet />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
