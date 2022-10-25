import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import { getCompTable } from '../../Services';

const ArrangeTable = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const seasonId = urlParams.get('season_id');

  const [table, setTable] = useState([]);

  useEffect(() => {
    const fetchTable = async () => {
      const response = await getCompTable('season_id=' + seasonId);
      setTable(response?.data?.data?.table);
    };
    fetchTable();
  }, [seasonId]);

  console.log(table);

  return (
    <section className='arrange-table-sec'>
      <h3 className='sec-title'>جدول الترتيب</h3>

      <div className='table-container'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell className='red' style={{ width: '250px' }}>
                  الفريق
                </TableCell>
                <TableCell>لعب</TableCell>
                <TableCell>فاز</TableCell>
                <TableCell>تعادل</TableCell>
                <TableCell>خسر</TableCell>
                <TableCell>له</TableCell>
                <TableCell>عليه</TableCell>
                <TableCell className='red'>نقاط</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {table?.map((row, index) => (
                <TableRow
                  key={row?.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={`https://cdn.so3ody.com/scores/teams/50x50/${row?.id}.png`}
                        alt={row?.name}
                        width='30px'
                      />
                      <span>{row?.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{row?.totalMatches}</TableCell>
                  <TableCell>{row?.totalWonMatches}</TableCell>
                  <TableCell>{row?.totalDrawMatches}</TableCell>
                  <TableCell>{row?.totalLossMatches}</TableCell>
                  <TableCell>{row?.score}</TableCell>
                  <TableCell>{row?.receive}</TableCell>
                  <TableCell className='red'>{row?.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default ArrangeTable;
