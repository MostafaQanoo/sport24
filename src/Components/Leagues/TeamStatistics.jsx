import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { getAllStats } from '../../Services';

const TeamStatistics = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const seasonId = urlParams.get('season_id');

  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchTable = async () => {
      const response = await getAllStats('season_id=' + seasonId);
      setStats(response?.data?.data);
    };
    fetchTable();
  }, [seasonId]);

  console.log(stats);

  return (
    <section className='stats-sec'>
      <h3 className='sec-title'>إحصائيات الفريق</h3>
      <Grid container spacing={2} style={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={6} md={4}>
          <div className='single-stat'>
            <h4 className='stat-title'>الأكثر تسجيل للأهداف</h4>
            <div className='card-body'>
              <ul className='list'>
                {stats?.goal
                  ?.slice(0, 5)
                  ?.map(({ team_id, name, count }, index) => (
                    <li className='item' key={team_id}>
                      <div className='team'>
                        <img
                          src={`https://cdn.so3ody.com/scores/teams/50x50/${team_id}.png`}
                          alt='Name'
                          width={'50'}
                        />
                        <p className='team-name'>{name}</p>
                      </div>
                      <p className='value'>{count}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='single-stat'>
            <h4 className='stat-title'>الأكثر استقبالاً للأهداف</h4>
            <div className='card-body'>
              <ul className='list'>
                {stats?.mostRecieveGaols
                  ?.slice(0, 5)
                  ?.map(({ team_id, name, count }, index) => (
                    <li className='item' key={team_id}>
                      <div className='team'>
                        <img
                          src={`https://cdn.so3ody.com/scores/teams/50x50/${team_id}.png`}
                          alt='Name'
                          width={'50'}
                        />
                        <p className='team-name'>{name}</p>
                      </div>
                      <p className='value'>{count}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='single-stat'>
            <h4 className='stat-title'>الأكثر تسديدا على المرمي</h4>
            <div className='card-body'>
              <ul className='list'>
                {stats?.mostShotOnTaregt
                  ?.slice(0, 5)
                  ?.map(({ team_id, name, count }, index) => (
                    <li className='item' key={team_id}>
                      <div className='team'>
                        <img
                          src={`https://cdn.so3ody.com/scores/teams/50x50/${team_id}.png`}
                          alt='Name'
                          width={'50'}
                        />
                        <p className='team-name'>{name}</p>
                      </div>
                      <p className='value'>{count}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='single-stat'>
            <h4 className='stat-title'>الكروت الحمراء</h4>
            <div className='card-body'>
              <ul className='list'>
                {stats?.red_card
                  ?.slice(0, 5)
                  ?.map(({ team_id, name, count }, index) => (
                    <li className='item' key={team_id}>
                      <div className='team'>
                        <img
                          src={`https://cdn.so3ody.com/scores/teams/50x50/${team_id}.png`}
                          alt='Name'
                          width={'50'}
                        />
                        <p className='team-name'>{name}</p>
                      </div>
                      <p className='value'>{count}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className='single-stat'>
            <h4 className='stat-title'>الكروت الصفراء</h4>
            <div className='card-body'>
              <ul className='list'>
                {stats?.yellow_card
                  ?.slice(0, 5)
                  ?.map(({ team_id, name, count }, index) => (
                    <li className='item' key={team_id}>
                      <div className='team'>
                        <img
                          src={`https://cdn.so3ody.com/scores/teams/50x50/${team_id}.png`}
                          alt='Name'
                          width={'50'}
                        />
                        <p className='team-name'>{name}</p>
                      </div>
                      <p className='value'>{count}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default TeamStatistics;
