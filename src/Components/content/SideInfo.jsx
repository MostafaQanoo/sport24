import { Box, List, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCompetitions } from '../../Services';

const SideInfo = () => {
  const matches = useMediaQuery('(max-width:1000px)');
  const [value, setValue] = useState();

  const [competitions, setCompetitions] = useState([]);

  const fetchCompititions = async () => {
    const response = await getCompetitions('');
    const europComp = await getCompetitions('id=401');
    const champComp = await getCompetitions('id=400');
    console.log(europComp?.data?.data[0]);
    console.log(champComp?.data?.data[0]);
    setCompetitions([
      ...response.data.data.slice(0, 5),
      europComp?.data?.data[0],
      champComp?.data?.data[0],
    ]);
  };

  useEffect(() => {
    fetchCompititions();
  }, []);

  console.log(competitions);

  useEffect(() => {
    if (matches) setValue('none');
  }, [matches]);

  return (
    <Box display={value} style={{ minWidth: '17%' }}>
      <List
        sx={{ background: '#F8F8F8', padding: '2px 2px' }}
        direction='column'
      >
        {competitions.map((compitition) => (
          <li
            key={compitition?.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              padding: '8px 5px',
              borderBottom: '1px solid rgb(225 225 225)',
            }}
          >
            <img
              src={`https://cdn.so3ody.com/scores/competitions/100x130/${compitition?.id}.png`}
              alt=''
              width='28px'
              height='28px'
              style={{ marginLeft: '10px' }}
            />
            <Link to={`/league/${compitition?.id}?season_id=${compitition?.currentSeason?.id}`} style={{color: '#000', textDecoration: 'none'}}>
              <Typography variant='h6' style={{ fontSize: '15px' }}>
                {compitition?.name}
              </Typography>
            </Link>
          </li>
        ))}
      </List>
      <img
        style={{
          marginTop: '25px',
          border: '3px solid #94b7db',
          objectFit: 'contain',
        }}
        src='https://via.placeholder.com/200X600/#DFE6FA'
        alt=''
      />
    </Box>
  );
};

export default SideInfo;
