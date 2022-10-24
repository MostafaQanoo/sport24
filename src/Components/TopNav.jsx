import { Box } from "@mui/system";
import React from "react";
import MenuImage from "../assets/images/Icon feather-menu.png";
import Sport from "../assets/images/Sport.png";
import GroupI from "../assets/images/Group 3794.png";
import styled from "@emotion/styled";

const StackTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  padding: 10px 0;
`;

const TopNav = () => {
  return (
    <Box paddingTop={3}>
      <StackTopBar>
        <img src={MenuImage} alt="" />
        <img width={120} src={Sport} alt="" />
        <img src={GroupI} width={40} alt="" />
      </StackTopBar>
    </Box>
  );
};

export default TopNav;
