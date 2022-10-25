
import Tab from "@mui/material/Tab";

import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Box } from "@mui/material";
import { useState } from "react";

const RangeTeamsGoals = () => {

  const [value, setValue] = useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];



  return (
      <Box sx={{ width: "100%", typography: "body1", background: "#F7F7F7" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              width: "80%",
              margin: "auto",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="ترتيب الفرق" value="1" />
              <Tab label="الهدافين" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ width: "100%", padding: '5px 8px' }}>
            <table style={{ width: "100%", padding: '10px 0 0 0' }}>
              <tbody style={{ display: "flex", flexDirection:"column", padding: "2px 12px" }}>
                <tr style={{ margin:"10px 0", padding: "0 10px" }}>
                  <th style={{ width: "20px", textAlign: "right", paddingRight: "5px" }} >
                    #
                  </th>
                  <th style={{
                      color: "red",
                      width: "300px",
                      textAlign: "right",
                      fontWeight: "100",
                      paddingRight: "15px"
                    }} >
                    الفريق
                  </th>
                  <th style={{ width: "60px", textAlign: "end", fontWeight: "100"}} >
                    لعب
                  </th>
                  <th style={{ width: "60px", textAlign: "end", fontWeight: "100"}} >
                    له
                  </th>
                  <th style={{ width: "60px", textAlign: "end", fontWeight: "100"}} >
                    عليه
                  </th>
                  <th style={{
                      color: "red",
                      width: "100px",
                      textAlign: "end",
                      fontWeight: "100"
                    }} >
                    نقاط
                  </th>
                </tr>

                {array.map((e) => (
                  <tr
                    key={Math.random()}
                    style={{
                      textAlign: "end",
                      borderBottom: "1px solid #dfdfdf",
                      fontSize: "15px",
                      padding: "0 5px 5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <td style={{ textAlign: "start", width: "10%" }}>1</td>
                    <td style={{ textAlign: "start", width: "45%", whiteSpace: "nowrap" }}>ريال مدريد </td>
                    <td style={{ width: "15%", textAlign: "center" }}>5</td>
                    <td style={{ width: "15%", textAlign: "center" }}>10</td>
                    <td style={{ width: "15%", textAlign: "center" }}>10</td>
                    <td style={{ width: "15%" }}>55</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
          <TabPanel value="2" style={{ width: "100%", padding: '0' }}>
          <table style={{ width: "100%", padding: '10px 0 0 0' }}>
              <tbody style={{ display: "flex", flexDirection:"column", padding: "2px 12px" }}>
                <tr style={{ margin:"10px 0" }}>
                  <th style={{ width: "15px", textAlign: "right", paddingRight: "5px" }} >
                    #
                  </th>
                  <th style={{
                      color: "red",
                      width: "100px",
                      textAlign: "center",
                      fontWeight: "100"
                    }} >
                    اللاعب
                  </th>
                  <th style={{ width: "100px", textAlign: "end", fontWeight: "100"}} >
                    اهداف
                  </th>
                  <th style={{
                      color: "red",
                      width: "100px",
                      textAlign: "center",
                      fontWeight: "100"
                    }} >
                    النادي
                  </th>
                </tr>

                {array.map((e) => (
                  <tr
                    key={Math.random()}
                    style={{
                      textAlign: "end",
                      borderBottom: "1px solid #d4d4d4",
                      fontSize: "15px",
                      padding: "0 5px 5px",
                      display: "flex",
                      justifyContent: "space-between" 
                    }}
                  >
                    <td style={{ textAlign: "start", marginLeft: "10px", width: "5%" }}>1</td>
                    <td style={{ textAlign: "start", width: "45%", whiteSpace: "nowrap" }}>أوديون إيجالو</td>
                    <td style={{ width: "15%", textAlign: "center" }}>5</td>
                    <td style={{ width: "35%" }}>الهلال السعودي</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
        </TabContext>
      </Box>
  )
}

export default RangeTeamsGoals