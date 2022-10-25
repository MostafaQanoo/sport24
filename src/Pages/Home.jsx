import { Box } from '@mui/system';
import React from 'react';
import { Competitions, LeftSide, TeamsSlider } from '../Components';

const Home = () => {
  return (
    <>
      <Box flex="3">
        <main>
          <TeamsSlider />
          <Competitions />
        </main>
      </Box>
      <Box flex='1'>
        <LeftSide />
      </Box>
    </>
  );
};

export default Home;
