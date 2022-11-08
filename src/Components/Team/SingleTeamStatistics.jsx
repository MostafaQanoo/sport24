import { List, Stack, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTeamStats } from '../../Services';

const SingleTeamStatistics = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const { id } = useParams();
  const seasonId = urlParams.get('season_id');

  const [teamStats, setTeamStats] = useState([]);

  useEffect(() => {
    const fetchTable = async () => {
      const response = await getTeamStats(
        `season_id=${seasonId}&team_id=${id}`
      );
      setTeamStats(response?.data?.data?.statistics);
    };
    fetchTable();
  }, [seasonId, id]);

  console.log(teamStats);

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
      <Typography
        variant='h5'
        fontWeight='600'
        padding='50px 0 0px'
        style={{ marginBottom: '1rem' }}
      >
        الإحصائيات
      </Typography>

      <Stack
        display='flex'
        flexDirection={value}
        flexWrap='wrap'
        justifyContent='space-evenly'
        alignItems='start'
      >
        {/* 1 */}
        <Stack
          width={widthCol}
          display='flex'
          justifyContent='space-between'
          marginBottom={'1rem'}
        >
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
              <Typography variant='h6'>الاهداف</Typography>
              <Typography color='#234EC4'>{teamStats?.goal}</Typography>
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
              <Typography variant='h6'>التمريرات المساعدة</Typography>
              <Typography color='#234EC4'>{teamStats?.assist}</Typography>
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
              <Typography variant='h6'>البطاقات الصفراء</Typography>
              <Typography color='#234EC4'>{teamStats?.yellow_card}</Typography>
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
              <Typography variant='h6'>الطرد بعد بطاقة صفراء</Typography>
              <Typography color='#234EC4'>
                {teamStats?.yellow_red_card}
              </Typography>
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
              <Typography variant='h6'>بديل طالع</Typography>
              <Typography color='#234EC4'>
                {teamStats?.substitute_out}
              </Typography>
            </li>
          </List>
        </Stack>

        <Stack
          width={widthCol}
          display='flex'
          justifyContent='space-between'
          marginBottom={'1rem'}
        >
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
              <Typography variant='h6'>بديل داخل</Typography>
              <Typography color='#234EC4'>
                {teamStats?.substitute_in}
              </Typography>
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
              <Typography variant='h6'> ركلات الجزاء</Typography>
              <Typography color='#234EC4'>{teamStats?.penalty_goal}</Typography>
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
              <Typography variant='h6'>بطاقات حمراء</Typography>
              <Typography color='#234EC4'>{teamStats?.red_card}</Typography>
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
              <Typography variant='h6'>اضاعة ركلات جزاء</Typography>
              <Typography color='#234EC4'>{teamStats?.penalty_miss}</Typography>
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
              <Typography variant='h6'>تسجيل ركلات جزاء</Typography>
              <Typography color='#234EC4'>{teamStats?.penalty_save}</Typography>
            </li>
          </List>
        </Stack>

        <Stack
          width={widthCol}
          display='flex'
          justifyContent='space-between'
          marginBottom={'1rem'}
        >
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
              <Typography variant='h6'>الهوائي </Typography>
              <Typography color='#234EC4'>{teamStats?.aerialsWon}</Typography>
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
              <Typography variant='h6'>نظافة الشباك</Typography>
              <Typography color='#234EC4'>{teamStats?.clearances}</Typography>
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
              <Typography variant='h6'>العرضيات </Typography>
              <Typography color='#234EC4'>{teamStats?.corners}</Typography>
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
              <Typography variant='h6'>التمريرات</Typography>
              <Typography color='#234EC4'>{teamStats?.crosses}</Typography>
            </li>
          </List>
        </Stack>
      </Stack>
    </Box>
  );
};

export default SingleTeamStatistics;
