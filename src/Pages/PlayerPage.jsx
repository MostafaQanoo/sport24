import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { MainInfo, TransitionPlayer } from '../Components';
// Image
import Player from '../assets/images/player.png';
import { useParams } from 'react-router-dom';
import { getSinglePlayer } from '../Services';

const PlayerPage = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await getSinglePlayer('people_id=' + id);
      setPlayer(response?.data?.data);
    };
    fetchPlayer();
  }, [id]);

  console.log(player);

  return (
    <>
      <Box flex='3'>
        <main>
          <MainInfo player={player} />
        </main>
      </Box>
      <Box flex='1'>
        <aside>
          <TransitionPlayer />
        </aside>
      </Box>
    </>
  );
};

export default PlayerPage;
