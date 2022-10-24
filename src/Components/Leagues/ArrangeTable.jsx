import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';

const ArrangeTable = () => {
  return (
    <section className='arrange-table-sec'>
      <h3 className='sec-title'>جدول الترتيب</h3>

      <div className='table-container'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell className='red' style={{width: '250px'}}>الفريق</TableCell>
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
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{'1'}</TableCell>
                  <TableCell>الفريق</TableCell>
                  <TableCell>لعب</TableCell>
                  <TableCell>فاز</TableCell>
                  <TableCell>تعادل</TableCell>
                  <TableCell>خسر</TableCell>
                  <TableCell>له</TableCell>
                  <TableCell>عليه</TableCell>
                  <TableCell className='red'>نقاط</TableCell>
                </TableRow>
                <TableRow
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{'1'}</TableCell>
                  <TableCell>الفريق</TableCell>
                  <TableCell>لعب</TableCell>
                  <TableCell>فاز</TableCell>
                  <TableCell>تعادل</TableCell>
                  <TableCell>خسر</TableCell>
                  <TableCell>له</TableCell>
                  <TableCell>عليه</TableCell>
                  <TableCell className='red'>نقاط</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

export default ArrangeTable;
