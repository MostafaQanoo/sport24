import { Box, List, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getPlayerTransfer } from '../../Services';

const TransitionPlayer = ({ playerId, role }) => {
  const matches = useMediaQuery('(max-width:1000px)');

  const [transitions, setTransitions] = useState([]);

  
  useEffect(() => {
    const fetchTransitions = async () => {
      const response = await getPlayerTransfer('people_id=' + playerId);
      setTransitions(response?.data?.data);
    };
    fetchTransitions();
  }, [playerId]);

  const [value, setValue] = useState();

  useEffect(() => {
    if (matches) setValue('none');
  }, [matches]);

  return (
    <Box flex='1' display={value}>
      <List
        sx={{ background: '#F8F8F8', padding: '5px 10px' }}
        direction='column'
      >
        <Typography>{role}</Typography>
        {transitions.map((tras, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 5px',
              width: '100%',
              borderBottom: '1px solid rgb(225 225 225)',
            }}
          >
            <img
              src={`https://cdn.so3ody.com/scores/teams/50x50/${tras?.to?.team_id}.png`}
              alt={tras?.to?.team_name}
              width='28px'
              height='28px'
              style={{ objectFit: 'contain' }}
            />
            <Typography marginLeft='2px' variant='caption'>
              {tras?.to?.team_name}
            </Typography>
            <Typography variant='caption' color='red'>
              انتقال
            </Typography>
            <Typography variant='caption'>{tras?.to?.end_date || 'إلى الآن'}</Typography>
          </li>
        ))}
      </List>
    </Box>
  );
};

export default TransitionPlayer;
