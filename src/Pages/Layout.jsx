import React from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import { Stack, useMediaQuery } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import SideInfo from "../Components/content/SideInfo";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import NavbarMobile from "../Components/NavbarMobile";
import TopNav from "../Components/TopNav";

const Layout = () => {
  const matches = useMediaQuery("(max-width:1000px)");
  const [mobileBar, setMobileBar] = useState(true);

  return (
    <>
      {matches ? (
        <NavbarMobile mobileBar={mobileBar} setMobileBar={setMobileBar} />
      ) : (
        <>
          <Container>
            <TopNav />
            <Navbar />
          </Container>
        </>
      )}
      <Container>
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
