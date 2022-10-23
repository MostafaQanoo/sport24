import React from "react";
import PremierLeague from "./../assets/images/premier-league.png";
import { Box } from "@mui/material";

const MatchOverview = () => {
  return (
    <>
      <Box flex="3">
        <main>
          <div className="header-img">
            <div>
              <h1>الدوري الممتاز</h1>
              <img src={PremierLeague} alt="الدوري الممتاز" />
            </div>
          </div>
        </main>
      </Box>
      <Box flex="1">
        <aside>left side</aside>
      </Box>
    </>
  );
};

export default MatchOverview;
