import { AccountCircle, Image } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import MenuImage from "../assets/images/Icon feather-menu.png";
import Sport from "../assets/images/Sport.png";
import GroupI from "../assets/images/Group 3794.png";
import styled from "@emotion/styled";
import Sidebar from "./Sidebar";

const StackTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

const NavbarMobile = ({ mobileBar, setMobileBar }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  return (
    <Box sx={{ boxShadow: "0px 0px 12px #d5d5d5", padding: "1px 25px" }}>
      <StackTopBar>
        <Sidebar mobileBar={mobileBar} />
        <img width={120} src={Sport} alt="" />
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit">
          <AccountCircle />
        </IconButton>
      </StackTopBar>

      {/* */}
    </Box>
  );
};

export default NavbarMobile;
