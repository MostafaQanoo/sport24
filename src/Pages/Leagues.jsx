import React from 'react';
import { ArrangeTable, PageBanner, RangeTeamsGoals, TeamStatistics } from '../Components';
import PremierLeague from '../assets/images/premier-league.png';
import { Box } from '@mui/material';

const Leagues = () => {
  return (
    <>
      <Box flex='3'>
        <main>
          <PageBanner
            leagueImage={PremierLeague}
            leagueName={'الدوري الممتاز'}
          />
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
