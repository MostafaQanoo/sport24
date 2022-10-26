import { List, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';

const SingleTeamStatistics = () => {
  const matches = useMediaQuery('(max-width: 768px)');
  const [value, setValue] = useState();
  const [widthCol, setWidthCol] = useState();

  useEffect(() => {
    if (matches) {
      setValue('column');
      setWidthCol('100%');
    } else {
      setValue('row');
      setWidthCol('30%');
    }
  }, [matches]);
  return (
    <Box paddingBottom='60px'>
      <Typography variant='h5' fontWeight='600' padding='50px 0 0px' style={{marginBottom: '1rem'}}>
        الإحصائيات
      </Typography>

      <Stack
        display='flex'
        flexDirection={value}
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='center'
      >
        {/* 1 */}
        <Stack width={widthCol} display='flex' justifyContent='space-between' marginBottom={'1rem'}>
          <List
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgb(240 240 240)',
              borderRadius: '7px',
              width: '100%',
            }}
          >
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>
          </List>
        </Stack>

        {/* 2 الأكثر استقبالاً للأهداف */}
        <Stack width={widthCol} display='flex' justifyContent='space-between' marginBottom={'1rem'}>
          <List
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgb(240 240 240)',
              borderRadius: '7px',
              width: '100%',
            }}
          >
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>
          </List>
        </Stack>

        {/* 3 الأكثر تسديدا علي المرمى */}
        <Stack width={widthCol} display='flex' justifyContent='space-between' marginBottom={'1rem'}>
          <List
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgb(240 240 240)',
              borderRadius: '7px',
              width: '100%',
            }}
          >
            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>

            <li
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '85%',
                padding: '7px 20px',
                borderBottom: '1px solid #E0E0E0',
              }}
            >
              <Typography variant='h6'>مانشستر سيتي</Typography>
              <Typography color='#234EC4'>20</Typography>
            </li>
          </List>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleTeamStatistics;
