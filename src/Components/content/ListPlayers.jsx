import { Box, List, Typography, useMediaQuery } from '@mui/material';
// import Madrid from "../../img/madrid.png";
import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const ListPlayers = ({ teamId, squad }) => {
  const matches = useMediaQuery('(max-width:1000px)');
  const [valueDisplay, setValueDisplay] = useState();

  useEffect(() => {
    if (matches) setValueDisplay('none');
    else setValueDisplay('flex');
  }, [matches]);

  return (
    <Box flex='1' display={valueDisplay} flexDirection='column'>
      <Typography color='blue' padding='5px 0 10px 0'>
        قائمة اللاعبين
      </Typography>
      <List
        sx={{ background: '#F8F8F8', padding: '5px 10px' }}
        direction='column'
      >
        <Typography>حراسة المرمى</Typography>
        {squad
          ?.filter((player) => player.main_position_id === 1)
          .map((player) => (
            <li
              key={player?.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 5px',
                width: '96%',
                borderBottom: '1px solid rgb(225 225 225)',
              }}
            >
              <Link
                to={`/player/${player?.id}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <Stack direction='row'>
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${player?.id}.png`}
                    alt=''
                    width='30px'
                    height='30px'
                    style={{ objectFit: 'contain', borderRadius: '50%' }}
                  />
                  <Stack direction='column' marginRight='10px'>
                    <Typography
                      marginLeft='2px'
                      lineHeight='1.22'
                      variant='body1'
                    >
                      {player?.name}
                    </Typography>
                    <Typography marginLeft='2px' variant='caption'>
                      {player?.position}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>

              <img
                src={`https://cdn.so3ody.com/scores/teams/50x50/${teamId}.png`}
                width='30px'
                height='30px'
                style={{ objectFit: 'contain' }}
                alt=''
              />
            </li>
          ))}
      </List>

      <Box margin='10px 0' />

      {/* خط الدفاع */}
      <List
        sx={{ background: '#F8F8F8', padding: '5px 10px' }}
        direction='column'
      >
        <Typography paddingTop='15px'>خط الدفاع</Typography>
        {squad
          ?.filter((player) => player.main_position_id === 2)
          .map((player) => (
            <li
              key={player?.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 5px',
                width: '96%',
                borderBottom: '1px solid rgb(225 225 225)',
              }}
            >
              <Link
                to={`/player/${player?.id}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <Stack direction='row'>
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${player?.id}.png`}
                    alt=''
                    width='30px'
                    height='30px'
                    style={{ objectFit: 'contain', borderRadius: '50%' }}
                  />
                  <Stack direction='column' marginRight='10px'>
                    <Typography
                      marginLeft='2px'
                      lineHeight='1.22'
                      variant='body1'
                    >
                      {player?.name}
                    </Typography>
                    <Typography marginLeft='2px' variant='caption'>
                      {player?.position}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>

              <img
                src={`https://cdn.so3ody.com/scores/teams/50x50/${teamId}.png`}
                width='30px'
                height='30px'
                style={{ objectFit: 'contain' }}
                alt=''
              />
            </li>
          ))}
      </List>
      <Box margin='10px 0' />

      {/* خط الوسط */}
      <List
        sx={{ background: '#F8F8F8', padding: '5px 10px' }}
        direction='column'
      >
        <Typography paddingTop='15px'>خط الوسط</Typography>
        {squad
          ?.filter((player) => player.main_position_id === 3)
          .map((player) => (
            <li
              key={player?.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 5px',
                width: '96%',
                borderBottom: '1px solid rgb(225 225 225)',
              }}
            >
              <Link
                to={`/player/${player?.id}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <Stack direction='row'>
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${player?.id}.png`}
                    alt=''
                    width='30px'
                    height='30px'
                    style={{ objectFit: 'contain', borderRadius: '50%' }}
                  />
                  <Stack direction='column' marginRight='10px'>
                    <Typography
                      marginLeft='2px'
                      lineHeight='1.22'
                      variant='body1'
                    >
                      {player?.name}
                    </Typography>
                    <Typography marginLeft='2px' variant='caption'>
                      {player?.position}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>
              <img
                src={`https://cdn.so3ody.com/scores/teams/50x50/${teamId}.png`}
                width='30px'
                height='30px'
                style={{ objectFit: 'contain' }}
                alt=''
              />
            </li>
          ))}
      </List>
      <Box margin='10px 0' />

      {/* خط الهجوم */}
      <List
        sx={{ background: '#F8F8F8', padding: '5px 10px' }}
        direction='column'
      >
        <Typography paddingTop='15px'>خط الهجوم</Typography>
        {squad
          ?.filter((player) => player.main_position_id === 4)
          .map((player) => (
            <li
              key={player?.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 5px',
                width: '96%',
                borderBottom: '1px solid rgb(225 225 225)',
              }}
            >
              <Link
                to={`/player/${player?.id}`}
                style={{ color: '#000', textDecoration: 'none' }}
              >
                <Stack direction='row'>
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${player?.id}.png`}
                    alt=''
                    width='30px'
                    height='30px'
                    style={{ objectFit: 'contain', borderRadius: '50%' }}
                  />
                  <Stack direction='column' marginRight='10px'>
                    <Typography
                      marginLeft='2px'
                      lineHeight='1.22'
                      variant='body1'
                    >
                      {player?.name}
                    </Typography>
                    <Typography marginLeft='2px' variant='caption'>
                      {player?.position}
                    </Typography>
                  </Stack>
                </Stack>
              </Link>

              <img
                src={`https://cdn.so3ody.com/scores/teams/50x50/${teamId}.png`}
                width='30px'
                height='30px'
                style={{ objectFit: 'contain' }}
                alt=''
              />
            </li>
          ))}
      </List>
    </Box>
  );
};

export default ListPlayers;
