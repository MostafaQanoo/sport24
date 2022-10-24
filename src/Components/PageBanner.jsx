import { Box } from '@mui/system';
import React from 'react';

const PageBanner = ({ leagueImage, leagueName }) => {
  return (
    <div className='page-banner'>
      <Box className='header-card'>
        <h1>{leagueName}</h1>
        <img src={leagueImage} alt={leagueName} />
      </Box>
      <div className='body-card'>
        <div className="progress-bar">
          <div className="progress-bar__progress" style={{width: `${30}%`}}></div>
        </div>
        <div className="start-end">
          <p>بدأ {'05 أغسطس 2022'}</p>
          <p>ينتهي {'30 مايو 2023'}</p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
