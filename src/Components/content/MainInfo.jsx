import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";

import TableData from "../content/TableDate";
import calculateAge from "../../Utils/calculateAge";

const MainInfo = ({ player, playerData }) => {
  return (
    <Box flex="3">
      <Box className="player">
        <Stack color="#fff">
          <img
            src={`https://cdn.so3ody.com/scores/people/50x50/${player?.id}.png`}
            alt={player?.name}
            className="player-img"
          />
          <h5>{player?.name}</h5>
          <Stack
            width="96%"
            paddingTop="60px"
            margin="0 auto"
            direction="row"
            position="relative"
            justifyContent="space-between">
            <Box width="20%" display="flex" alignItems="center">
              <EmojiFlagsIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p">{player?.nationality}</Typography>
            </Box>

            <Box width="20%" display="flex" alignItems="center">
              <LanguageOutlinedIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p">
                {player?.name && player?.memberships[0]?.teamName}
              </Typography>
            </Box>

            <Box width="20%" display="flex" alignItems="center">
              <ArrowUpwardOutlinedIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p">
                {" "}
                العمر:{calculateAge(player?.birthDate)} سنة{" "}
              </Typography>
            </Box>

            <Box width="20%" display="flex" alignItems="center">
              <PersonPinCircleOutlinedIcon
                fontSize="20px"
                style={{ margin: "-10px 0 0 6px", color: "#d2d2d2" }}
              />
              <Typography variant="p">المركز: {player?.position}</Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <TableData playerData={playerData} />
    </Box>
  );
};

export default MainInfo;
