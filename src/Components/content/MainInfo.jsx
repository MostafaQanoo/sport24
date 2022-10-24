import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";

import TableData from "../content/TableDate";

const MainInfo = ({ Player }) => {
  return (
    <Box flex="3">
      <Box className="player">
        <Stack color="#fff">
          <img src="https://via.placeholder.com/70" alt="" />
          <h5>كريستيانو رونالدو</h5>
          <Stack
            width="96%"
            paddingTop="60px"
            margin="0 auto"
            direction="row"
            position="relative"
            justifyContent="space-between">
            {/* font-size: 20px;
    margin-top: -10px;
    color: #d2d2d2;
    margin-left: 6px; */}
            <Box width="20%" display="flex" alignItems="center">
              <EmojiFlagsIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p">مانشستر يونايتد</Typography>
            </Box>

            <Box width="20%" display="flex" alignItems="center">
              <LanguageOutlinedIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p">البرتغال</Typography>
            </Box>

            <Box width="20%" display="flex" alignItems="center">
              <ArrowUpwardOutlinedIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p"> العمر:37 سنة </Typography>
            </Box>

            <Box width="20%" display="flex" alignItems="center">
              <PersonPinCircleOutlinedIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p">المركز: مهاجم</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <TableData />
    </Box>
  );
};

export default MainInfo;
