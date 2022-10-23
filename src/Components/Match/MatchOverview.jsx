import React from "react";
import { Box, Divider } from "@mui/material";
import { teamA, teamB } from "../../assets/images";
import { win, lose, draw } from "../../assets/icons";

const MatchOverview = () => {
  return (
    <Box>
      <p className="title">اخر خمس مباريات</p>
      <Divider sx={{ marginTop: "1rem" }} />
      <Box className="last-five-matches-wrapper">
        <Box className="card-team">
          <Box className="team">
            <img src={teamA} alt="team A" />
            <p>ريال مدريد</p>
          </Box>
          <Box className="last-five-matches">
            <img src={win} alt="win" />
            <img src={lose} alt="lose" />
            <img src={win} alt="win" />
            <img src={draw} alt="draw" />
            <img src={win} alt="win" />
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box className="card-team">
          <Box className="team">
            <img src={teamB} alt="team B" />
            <p>برشلونة</p>
          </Box>
          <Box className="last-five-matches">
            <img src={win} alt="win" />
            <img src={lose} alt="lose" />
            <img src={win} alt="win" />
            <img src={draw} alt="draw" />
            <img src={win} alt="win" />
          </Box>
        </Box>
      </Box>
      <Divider />
      <p className="title">مواجهات مباشرة</p>
    </Box>
  );
};

export default MatchOverview;
