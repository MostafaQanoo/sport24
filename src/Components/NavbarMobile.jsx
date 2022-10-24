import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Sport from "../assets/images/Sport.png";
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
