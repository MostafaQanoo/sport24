import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { getTeams } from '../../Services';

const TeamsSlider = () => {
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    const response = await getTeams();
    setTeams(response.data.data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <section className='teams-sec'>
      <h3 className='sec-title'>إختر الفريق</h3>
      <Splide
        options={{
          perPage: 4,
          drag: true,
          rewind: true,
          direction: 'rtl',
          pagination: false,
          loop: true,
          width: '100%',
        }}
      >
        {teams?.map((team) => (
          <SplideSlide key={team?.id}>
            <Link to={`team/${team?.id}`} className='single-slide'>
              <img
                src={`https://cdn.so3ody.com/scores/teams/50x50/${team?.id}.png`}
                alt={team?.name}
              />
              <h4>{team?.name}</h4>
              <CheckCircleOutlineIcon className='icon' />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default TeamsSlider;
