import React from 'react'
import { ArrangeTable, PageBanner, TeamStatistics } from '../Components'
import PremierLeague from '../assets/images/premier-league.png'

const Leagues = () => {
  return (
    <>
      <PageBanner leagueImage={PremierLeague} leagueName={'الدوري الممتاز'} />
      <ArrangeTable />
      <TeamStatistics />
    </>
  )
}

export default Leagues