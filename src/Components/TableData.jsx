import * as React from 'react';
// import Styled from '@emotion/styled';

export default function TableData() {
  return (
    <div style={{ width: '100%', marginBottom: '2rem' }}>
      <table style={{ width: '100%' }}>
        <tr>
          <th style={{ width: '20px', textAlign: 'right', padding: 10 }}>#</th>
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
        <tr
          style={{
            textAlign: 'right',
            borderBottom: '3px solid red',
          }}
        >
          <td style={{ padding: 10 }}>1</td>
          <td style={{ padding: 10 }}>Alfreds Futterkiste</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ color: 'red', padding: 10 }}>55</td>
        </tr>

        <tr
          style={{
            textAlign: 'right',
            borderBottom: '3px solid red',
          }}
        >
          <td style={{ padding: 10 }}>2</td>
          <td style={{ padding: 10 }}>Alfreds Futterkiste</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ color: 'red', padding: 10 }}>55</td>
        </tr>
        <tr
          style={{
            textAlign: 'right',
            borderBottom: '3px solid red',
          }}
        >
          <td style={{ padding: 10 }}>3</td>
          <td style={{ padding: 10 }}>Alfreds Futterkiste</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ color: 'red', padding: 10 }}>55</td>
        </tr>
        <tr
          style={{
            textAlign: 'right',
            borderBottom: '3px solid red',
          }}
        >
          <td style={{ padding: 10 }}>4</td>
          <td style={{ padding: 10 }}>Alfreds Futterkiste</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ padding: 10 }}>55</td>
          <td style={{ color: 'red', padding: 10 }}>55</td>
        </tr>
      </table>
    </div>
  );
}
