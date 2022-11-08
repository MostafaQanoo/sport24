// import Styled from '@emotion/styled';
import { useEffect, useState } from "react";

function TableData({ playerData }) {
  const [playerDataState, setPlayerDataState] = useState([]);

  useEffect(() => {
    if (Array.isArray(playerData)) {
      setPlayerDataState(playerData);
    } else {
      for (const key in playerData) {
        if (Object.hasOwnProperty.call(playerData, key)) {
          const element = playerData[key];
          setPlayerDataState((prev) => [...prev, element]);
        }
      }
    }
  }, [playerData]);

  return (
    <div style={{ width: "100%", marginBottom: "2rem", marginTop: "2rem" }}>
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
          {playerDataState?.length > 0 &&
            playerDataState?.map(({ id, name }, index) => (
              <tr
                style={{
                  textAlign: "right",
                  borderBottom: "1px solid #ccc",
                }}>
                <td style={{ padding: 10 }}>{index + 1}</td>
                <td style={{ padding: 10 }}>{name}</td>
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
