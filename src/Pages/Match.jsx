import React, { useEffect } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { PremierLeague } from "./../assets/images";
import { calender, stadium } from "./../assets/icons";
import { teamA, teamB } from "./../assets/images";

const Match = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log("newValue: ", newValue);
    setValue(newValue);
  };

  useEffect(() => {
    if (location.pathname.includes("statistics")) {
      setValue(3);
    } else if (location.pathname.includes("events")) {
      setValue(2);
    } else if (location.pathname.includes("formation")) {
      setValue(1);
    } else {
      setValue(0);
    }
  }, [location.pathname]);

  return (
    <>
      <Box flex="3">
        <main>
          <div className="header-img">
            <Box className="header-card">
              <h1>
                الدوري <br /> الممتاز
              </h1>
              <img src={PremierLeague} alt="الدوري الممتاز" />
            </Box>
            <Box className="body-card">
              <Box className="card-box">
                <img src={stadium} alt="stadium" />
                <p>مانشستر يونايتد</p>
              </Box>
              <Box className="blur-card">
                <Box className="team">
                  <img src={teamA} alt="team A" />
                  <p>ريال مدريد</p>
                </Box>
                <Box className="score">
                  <Box className="box-icon-label">
                    <img src={PremierLeague} alt="الدوري الممتاز" />
                    <span>الدوري الممتاز</span>
                  </Box>
                  <Box className="result">2 : 1</Box>
                  <p className="time">وقت كامل</p>
                </Box>
                <Box className="team">
                  <img src={teamB} alt="team B" />
                  <p>برشلونة</p>
                </Box>
              </Box>
              <Box className="card-box">
                <img src={calender} alt="calender" />
                <p>السبت 03 سبتمبر 6:00 م</p>
              </Box>
            </Box>
          </div>
          <Tabs
            className="match-tabs"
            value={value}
            onChange={handleChange}
            centered={true}
            aria-label="tabs">
            <Link to="">
              <Tab label="نظرة عامة" />
            </Link>
            <Link to="formation">
              <Tab label="التشكيل" />
            </Link>
            <Link to="events">
              <Tab label="أحداث" />
            </Link>
            <Link to="statistics">
              <Tab label="إحصائيات" />
            </Link>
          </Tabs>
          <Outlet />
        </main>
      </Box>
      <Box flex="1">
        <aside>left side</aside>
      </Box>
    </>
  );
};

export default Match;
