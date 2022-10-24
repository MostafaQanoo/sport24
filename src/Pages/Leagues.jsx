import React from 'react'
import { ArrangeTable, PageBanner } from '../Components'
import PremierLeague from '../assets/images/premier-league.png'

const Leagues = () => {
  return (
    <>
      <PageBanner leagueImage={PremierLeague} leagueName={'الدوري الممتاز'} />
      <ArrangeTable />
    </>
  )
}

export default Leagues