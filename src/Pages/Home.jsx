import React from "react";
import { Box } from "@mui/material";
import MainInfo from "../Components/content/MainInfo";
import TransitionPlayer from "../Components/content/TransitionPlayer";
// Image
import Player from "../assets/images/player.png";

const Home = () => {
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

export default Home;
