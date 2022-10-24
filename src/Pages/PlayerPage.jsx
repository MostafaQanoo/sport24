import React from "react";
import { Box } from "@mui/material";
import { MainInfo, TransitionPlayer } from "../Components";
// Image
import Player from "../assets/images/player.png";

const PlayerPage = () => {
  return (
    <>
      <Box flex="3">
        <main>
          <MainInfo Image={Player} />
        </main>
      </Box>
      <Box flex="1">
        <aside>
          <TransitionPlayer />
        </aside>
      </Box>
    </>
  );
};

export default PlayerPage;
