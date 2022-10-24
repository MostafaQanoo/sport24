import React from 'react'
import { PageBanner } from '../Components'
import PremierLeague from '../assets/images/premier-league.png'

const Leagues = () => {
  return (
    <>
      <PageBanner leagueImage={PremierLeague} leagueName={'الدوري الممتاز'} />
    </>
  )
}

export default Leagues