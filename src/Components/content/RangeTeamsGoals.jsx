import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import { useState } from 'react';
import { player } from '../../assets/images';
import { useQuery } from '@tanstack/react-query';
import { getOrderCompetitions } from './../../Services/api/user';
import { Link } from 'react-router-dom';

const RangeTeamsGoals = () => {
  const seasonId = 1976986618;
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const { data: competitionsData } = useQuery(['OrderCompetitions'], () =>
    getOrderCompetitions(`season_id=${seasonId}`)
  );

  console.log(competitionsData?.data?.data?.table);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '.7rem',
          mb: 1,
        }}
      >
        <span
          sx={{
            color: '#234EC4',
          }}
        >
          الترتيب
        </span>
        <span>الدورى الإسباني 2022/2023</span>
      </Box>
      <Box
        sx={{
          width: '100%',
          typography: 'body1',
          background: '#F7F7F7',
          borderRadius: '10px',
          paddingTop: '15px',
          paddingBottom: '15px',
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: 'divider',
              width: '100%',
            }}
          >
            <TabList
              className='sidebar-tabs'
              onChange={handleChange}
              aria-label='lab API tabs example'
            >
              <Tab label='ترتيب الفرق' value='1' />
              <Tab label='الهدافين' value='2' />
            </TabList>
          </Box>
          <TabPanel value='1' style={{ width: '100%', padding: '5px 8px' }}>
            <table style={{ width: '100%', padding: '10px 0 0 0' }}>
              <tbody
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2px 12px',
                }}
              >
                <tr style={{ margin: '10px 0', padding: '0 10px' }}>
                  <th
                    style={{
                      width: '20px',
                      textAlign: 'right',
                      paddingRight: '5px',
                    }}
                  >
                    #
                  </th>
                  <th
                    style={{
                      color: 'red',
                      width: '300px',
                      textAlign: 'right',
                      fontWeight: '100',
                      paddingRight: '15px',
                    }}
                  >
                    الفريق
                  </th>
                  <th
                    style={{
                      width: '60px',
                      textAlign: 'end',
                      fontWeight: '100',
                    }}
                  >
                    لعب
                  </th>
                  <th
                    style={{
                      width: '60px',
                      textAlign: 'end',
                      fontWeight: '100',
                    }}
                  >
                    له
                  </th>
                  <th
                    style={{
                      width: '60px',
                      textAlign: 'end',
                      fontWeight: '100',
                    }}
                  >
                    عليه
                  </th>
                  <th
                    style={{
                      color: 'red',
                      width: '100px',
                      textAlign: 'end',
                      fontWeight: '100',
                    }}
                  >
                    نقاط
                  </th>
                </tr>

                {competitionsData?.data?.data?.table.map((item, index) => (
                  <tr
                    key={item?.id}
                    style={{
                      textAlign: 'end',
                      borderBottom: '1px solid #dfdfdf',
                      fontSize: '15px',
                      padding: '0 5px 5px',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <td style={{ textAlign: 'start', width: '10%' }}>
                      {item?.position}
                    </td>
                    <td
                      style={{
                        textAlign: 'start',
                        width: '45%',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <Link className='text-link' to={`/team/${item?.id}?season_id=${seasonId}`}>
                        {item?.name}
                      </Link>
                    </td>
                    <td style={{ width: '15%', textAlign: 'center' }}>
                      {item?.totalMatches}
                    </td>
                    <td style={{ width: '15%', textAlign: 'center' }}>
                      {item?.score}
                    </td>
                    <td style={{ width: '15%', textAlign: 'center' }}>
                      {item?.receive}
                    </td>
                    <td style={{ width: '15%' }}>{item?.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
          <TabPanel value='2' style={{ width: '100%', padding: '0' }}>
            <table style={{ width: '100%', padding: '10px 0 0 0' }}>
              <tbody
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2px 12px',
                }}
              >
                <tr style={{ margin: '10px 0' }}>
                  <th
                    style={{
                      width: '15px',
                      textAlign: 'right',
                      paddingRight: '5px',
                    }}
                  >
                    #
                  </th>
                  <th
                    style={{
                      color: 'red',
                      width: '100px',
                      textAlign: 'center',
                      fontWeight: '100',
                    }}
                  >
                    اللاعب
                  </th>
                  <th
                    style={{
                      width: '100px',
                      textAlign: 'end',
                      fontWeight: '100',
                    }}
                  >
                    اهداف
                  </th>
                  <th
                    style={{
                      color: 'red',
                      width: '100px',
                      textAlign: 'center',
                      fontWeight: '100',
                    }}
                  >
                    النادي
                  </th>
                </tr>

                {array.map((e) => (
                  <tr
                    key={Math.random()}
                    style={{
                      textAlign: 'end',
                      borderBottom: '1px solid #d4d4d4',
                      fontSize: '15px',
                      padding: '0 5px 5px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <td
                      style={{
                        textAlign: 'start',
                        marginLeft: '10px',
                        width: '5%',
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        textAlign: 'start',
                        width: '45%',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <img width={'30px'} src={player} alt='player' />
                        <span>محمد صلاح</span>
                      </Box>
                    </td>
                    <td
                      style={{
                        width: '15%',
                        textAlign: 'center',
                      }}
                    >
                      5
                    </td>
                    <td style={{ width: '35%' }}>الهلال السعودي</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default RangeTeamsGoals;
