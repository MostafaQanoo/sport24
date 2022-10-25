import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import { TransitionPlayer } from '../Components';

const Team = () => {
  return (
    <>
      <Box flex='3'>
        <main>
          <Box className='player'>
            <Stack color='#fff'>
              <img src='https://via.placeholder.com/70' alt='' />
              <Typography variant='h5'>الدوري الممتاز</Typography>
              <Stack
                width='96%'
                // paddingTop={value}
                margin='0 auto'
                direction='row'
                position='relative'
                justifyContent='center'
              >
                <Box
                  width='30%'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                >
                  <Typography variant='body2'>
                    المدرب: اولي جانر سولشاير
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Box>
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

export default Team;
