import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getTeams } from '../../Services';
import { Alert, Box } from '@mui/material';


const TeamsSlider = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const response = await getTeams();
    setTeams(response.data.data.slice(5, 13));
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <section className='teams-sec'>
      <Box sx={{ display:"flex", justifyContent: "spaceBetween", alignItems: "center" }}>
        <h3 className='sec-title'>الفِرق</h3>
        <p class="border-bottom-"></p>
      </Box>
      <Splide
        options={{
          perPage: 4,
          drag: true,
          direction: 'rtl',
          pagination: false,
          gap: '.8rem',
          breakpoints: {
            1000: {
              perPage: 3,
            },
            700: {
              perPage: 2,
            },
          },
        }}
      >
        {teams?.map((team) => (
          <SplideSlide key={team?.id}>
            <div className='single-slide'>
              <img
                src={`https://cdn.so3ody.com/scores/teams/50x50/${team?.id}.png`}
                alt={team?.name}
              />
              <h4>{team?.name}</h4>
              <CheckCircleOutlineIcon className='icon' />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default TeamsSlider;
