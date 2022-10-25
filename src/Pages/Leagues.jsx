import React, { useEffect, useState } from 'react';
import { ArrangeTable, MatchesTable, PageBanner, RangeTeamsGoals, TeamStatistics } from '../Components';
import PremierLeague from '../assets/images/premier-league.png';
import { Box } from '@mui/material';
import { getMatches } from '../Services';

const Leagues = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const seasonId = urlParams.get('season_id');

  const [matches, setMatches] = useState([]);

  
  useEffect(() => {
    const fetchMatches = async () => {
      const response = await getMatches('season_id=' + seasonId);
      setMatches(response?.data?.data);
    };
    fetchMatches();
  }, [seasonId]);


  return (
    <>
      <Box flex='3'>
        <main>
          <PageBanner
            leagueImage={PremierLeague}
            leagueName={'الدوري الممتاز'}
          />
          <MatchesTable matches={matches} />
          <ArrangeTable />
          <TeamStatistics />
        </main>
      </Box>
      <Box flex='1'>
        <RangeTeamsGoals />
      </Box>
    </>
  );
};

export default Leagues;
