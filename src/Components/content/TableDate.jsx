// import Styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function TableData({ playerData }) {
  const { id } = useParams();
  const [playerDataState, setPlayerDataState] = useState([]);

  const fetchPlayer = async () => {
    const response = await axios.get(
      'http://95.217.215.217/api/player-statisitcs.php?people_id=' + id
    );
    setPlayerDataState(response?.data?.data);
  };

  useEffect(() => {
    fetchPlayer();
  }, []);

  console.log(playerDataState);

  return (
    <div style={{ width: '100%', marginBottom: '2rem', marginTop: '2rem' }}>
      <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <th style={{ width: '20px', textAlign: 'right', padding: 10 }}>
              #
            </th>
            <th
              style={{
                color: 'red',
                width: '400px',
                textAlign: 'right',
                padding: 10,
              }}
            >
              البطولات
            </th>
            <th style={{ width: '100px', textAlign: 'right', padding: 10 }}>
              لعب
            </th>
            <th style={{ width: '100px', textAlign: 'right', padding: 10 }}>
              سجل
            </th>
            <th style={{ width: '100px', textAlign: 'right', padding: 10 }}>
              صنع
            </th>
            <th style={{ width: '100px', textAlign: 'right', padding: 10 }}>
              انذار
            </th>
            <th
              style={{
                color: 'red',
                width: '100px',
                textAlign: 'right',
                padding: 10,
              }}
            >
              نقاط
            </th>
          </tr>
          {playerDataState?.map(({ attend, name, goal, assist, yellow_card, substitute_out }, index) => (
            <tr
              style={{
                textAlign: 'right',
                borderBottom: '1px solid #ccc',
              }}
              key={index}
            >
              <td style={{ padding: 10 }}>{index + 1}</td>
              <td style={{ padding: 10 }}>{name}</td>
              <td style={{ padding: 10 }}>{attend}</td>
              <td style={{ padding: 10 }}>{goal}</td>
              <td style={{ padding: 10 }}>{assist}</td>
              <td style={{ padding: 10 }}>{yellow_card}</td>
              <td style={{ color: 'red', padding: 10 }}>{substitute_out}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableData;
