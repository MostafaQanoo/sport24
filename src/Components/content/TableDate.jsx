import { Typography } from "@mui/material";
import * as React from "react";
// import Styled from '@emotion/styled';

function TableData() {
  // let array = new Array(50);

  let array = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  return (
    <div style={{ width: "100%", marginBottom: "2rem" }}>
      <Typography variant="h5" padding="20px 0 10px">
        البرتغال
      </Typography>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th style={{ width: "20px", textAlign: "right", padding: 10 }}>
              #
            </th>
            <th
              style={{
                color: "red",
                width: "400px",
                textAlign: "right",
                padding: 10,
              }}>
              البطولات
            </th>
            <th style={{ width: "100px", textAlign: "right", padding: 10 }}>
              لعب
            </th>
            <th style={{ width: "100px", textAlign: "right", padding: 10 }}>
              سجل
            </th>
            <th style={{ width: "100px", textAlign: "right", padding: 10 }}>
              صنع
            </th>
            <th style={{ width: "100px", textAlign: "right", padding: 10 }}>
              انذار
            </th>
            <th
              style={{
                color: "red",
                width: "100px",
                textAlign: "right",
                padding: 10,
              }}>
              نقاط
            </th>
          </tr>

          {array.map((e) => (
            <tr
              style={{
                textAlign: "right",
                borderBottom: "3px solid red",
              }}>
              <td style={{ padding: 10 }}>1</td>
              <td style={{ padding: 10 }}>Alfreds Futterkiste</td>
              <td style={{ padding: 10 }}>55</td>
              <td style={{ padding: 10 }}>55</td>
              <td style={{ padding: 10 }}>55</td>
              <td style={{ padding: 10 }}>55</td>
              <td style={{ color: "red", padding: 10 }}>55</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default TableData;
