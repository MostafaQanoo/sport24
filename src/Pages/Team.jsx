import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ArrangeTable, ListPlayers, MatchesTable, SingleTeamStatistics } from '../Components';
import { getMatches, getSingleTeam, getSquad } from '../Services';

const Team = () => {
  const { id } = useParams();
  const urlParams = new URLSearchParams(window.location.search);
  const seasonId = urlParams.get('season_id');

  
  const [matches, setMatches] = useState([]);
  const [team, setTeam] = useState({});
  const [squad, setSquad] = useState([]);

  
  useEffect(() => {
    const fetchMatches = async () => {
      const response = await getMatches(`season_id=${seasonId}&team_id=${id}`);
      setMatches(response.data.data);
    };
    const fetchTeam = async () => {
      const response = await getSingleTeam(id);
      setTeam(response.data.data);
    };
    const fetchSquad = async () => {
      const response = await getSquad(`team_id=${id}`);
      setSquad(response.data.data);
    };
    fetchSquad();
    fetchTeam();
    fetchMatches();
  }, [seasonId, id]);

  return (
    <>
      <Box flex='3'>
        <main>
          <Box className='player'>
            <Stack color='#fff'>
              <img src={`https://cdn.so3ody.com/scores/teams/50x50/${id}.png`} alt={team?.name} width={80} />
              <Typography variant='h6'>{team?.name}</Typography>
              <Stack
                width='96%'
                margin='0 auto'
                direction='row'
                position='relative'
                justifyContent='center'
              >
              </Stack>
            </Stack>
          </Box>

          <MatchesTable matches={matches} seasonId={seasonId} />

          <ArrangeTable />
          <SingleTeamStatistics />
        </main>
      </Box>
      <Box flex='1' className='right-side'>
        <aside>
          <ListPlayers teamId={id} squad={squad} />
        </aside>
      </Box>
    </>
  );
};

export default Team;
