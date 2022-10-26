import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState, useEffect } from "react";
import { player } from "../../assets/images";
import { useQuery } from "@tanstack/react-query";
import {
  getOrderCompetitions,
  getCompetitions,
} from "./../../Services/api/user";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function RTL(props) {
  return <CacheProvider value={cacheRtl}>{props.children}</CacheProvider>;
}

const theme = createTheme({
  direction: "rtl",
});

const RangeTeamsGoals = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [seasonId, setSeasonId] = useState(1976986618);
  const handleChangeSelect = (event) => {
    setSeasonId(event.target.value);
  };

  const [competitions, setCompetitions] = useState([]);
  const fetchCompititions = async () => {
    const response = await getCompetitions("");
    console.log("sdf", response.data.data.slice(0, 5));
    setCompetitions([...response.data.data.slice(0, 5)]);
  };

  useEffect(() => {
    fetchCompititions();
  }, []);

  let array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const { data: competitionsData, isLoading } = useQuery(
    ["OrderCompetitions", seasonId],
    () => getOrderCompetitions(`season_id=${seasonId}`)
  );

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: ".7rem",
          mx: "10px",
          mt: "20px",
        }}>
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Box
              dir="rtl"
              sx={{
                width: "100%",
              }}>
              <FormControl fullWidth>
                <InputLabel id="competitions-label">الترتيب</InputLabel>
                <Select
                  dir="rtl"
                  labelId="competitions-select-label"
                  id="competitions-select"
                  value={seasonId}
                  label="الترتيب"
                  onChange={handleChangeSelect}>
                  {competitions.map((compitition, index) => {
                    return (
                      <MenuItem value={compitition?.currentSeason?.id}>
                        {compitition?.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
          </ThemeProvider>
        </CacheProvider>
      </Box>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          background: "#F7F7F7",
          borderRadius: "10px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              width: "100%",
            }}>
            <TabList
              className="sidebar-tabs"
              onChange={handleChange}
              aria-label="lab API tabs example">
              <Tab label="ترتيب الفرق" value="1" />
              <Tab label="الهدافين" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ width: "100%", padding: "5px 8px" }}>
            <table style={{ width: "100%", padding: "10px 0 0 0" }}>
              <tbody
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "2px 12px",
                }}>
                <tr style={{ margin: "10px 0", padding: "0 10px" }}>
                  <th
                    style={{
                      width: "20px",
                      textAlign: "right",
                      paddingRight: "5px",
                    }}>
                    #
                  </th>
                  <th
                    style={{
                      color: "red",
                      width: "300px",
                      textAlign: "right",
                      fontWeight: "100",
                      paddingRight: "15px",
                    }}>
                    الفريق
                  </th>
                  <th
                    style={{
                      width: "60px",
                      textAlign: "end",
                      fontWeight: "100",
                    }}>
                    لعب
                  </th>
                  <th
                    style={{
                      width: "60px",
                      textAlign: "end",
                      fontWeight: "100",
                    }}>
                    له
                  </th>
                  <th
                    style={{
                      width: "60px",
                      textAlign: "end",
                      fontWeight: "100",
                    }}>
                    عليه
                  </th>
                  <th
                    style={{
                      color: "red",
                      width: "100px",
                      textAlign: "end",
                      fontWeight: "100",
                    }}>
                    نقاط
                  </th>
                </tr>

                {competitionsData?.data?.data?.table.map((item, index) => (
                  <tr
                    key={item?.id}
                    style={{
                      textAlign: "end",
                      borderBottom: "1px solid #dfdfdf",
                      fontSize: "15px",
                      padding: "0 5px 5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <td style={{ textAlign: "start", width: "10%" }}>
                      {item?.position}
                    </td>
                    <td
                      style={{
                        textAlign: "start",
                        width: "45%",
                        whiteSpace: "nowrap",
                      }}>
                      <Link
                        className="text-link"
                        to={`/team/${item?.id}?season_id=${seasonId}`}>
                        {item?.name}
                      </Link>
                    </td>
                    <td style={{ width: "15%", textAlign: "center" }}>
                      {item?.totalMatches}
                    </td>
                    <td style={{ width: "15%", textAlign: "center" }}>
                      {item?.score}
                    </td>
                    <td style={{ width: "15%", textAlign: "center" }}>
                      {item?.receive}
                    </td>
                    <td style={{ width: "15%" }}>{item?.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TabPanel>
          <TabPanel value="2" style={{ width: "100%", padding: "0" }}>
            {isLoading ? (
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: "15px",
                  color: "black",
                }}>
                تحميل...
              </Box>
            ) : (
              <table style={{ width: "100%", padding: "10px 0 0 0" }}>
                <tbody
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2px 12px",
                  }}>
                  <tr style={{ margin: "10px 0" }}>
                    <th
                      style={{
                        width: "15px",
                        textAlign: "right",
                        paddingRight: "5px",
                      }}>
                      #
                    </th>
                    <th
                      style={{
                        color: "red",
                        width: "100px",
                        textAlign: "center",
                        fontWeight: "100",
                      }}>
                      اللاعب
                    </th>
                    <th
                      style={{
                        width: "100px",
                        textAlign: "end",
                        fontWeight: "100",
                      }}>
                      اهداف
                    </th>
                    <th
                      style={{
                        color: "red",
                        width: "100px",
                        textAlign: "center",
                        fontWeight: "100",
                      }}>
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
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}>
                      <td
                        style={{
                          textAlign: "start",
                          marginLeft: "10px",
                          width: "5%",
                        }}>
                        1
                      </td>
                      <td
                        style={{
                          textAlign: "start",
                          width: "45%",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}>
                          <img width={"30px"} src={player} alt="player" />
                          <span>محمد صلاح</span>
                        </Box>
                      </td>
                      <td
                        style={{
                          width: "15%",
                          textAlign: "center",
                        }}>
                        5
                      </td>
                      <td style={{ width: "35%" }}>الهلال السعودي</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default RangeTeamsGoals;
