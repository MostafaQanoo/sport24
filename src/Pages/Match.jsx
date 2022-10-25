import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { PremierLeague } from "./../assets/images";
import { calender, stadium } from "./../assets/icons";
import { teamA, teamB } from "./../assets/images";
import { getFormation, getHeadToHead } from "../Services";
import { useQuery } from "@tanstack/react-query";

const Match = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState(0);
  const [matchId, setMatchId] = useState(0);
  const [headToHead, setHeadToHead] = useState(null);
  const [teamsIds, setTeamsIds] = useState({
    teamA: 0,
    teamB: 0,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data: formationData } = useQuery(["formation", matchId], () =>
    getFormation(matchId)
  );

  useEffect(() => {
    if (pathname.includes("statistics")) {
      setValue(3);
    } else if (pathname.includes("events")) {
      setValue(2);
    } else if (pathname.includes("formation")) {
      setValue(1);
    } else {
      setValue(0);
    }

    const matchId = pathname.split("/")[2];
    setMatchId(matchId);
  }, [pathname]);

  useEffect(() => {
    setTeamsIds({
      teamA: formationData?.data?.data?.teamA?.team?.id,
      teamB: formationData?.data?.data?.teamB?.team?.id,
    });
  }, [formationData]);

  const { data: headToHeadData } = useQuery(["headToHead", teamsIds], () =>
    getHeadToHead(teamsIds)
  );

  useEffect(() => {
    console.log("headToHeadData: ", headToHeadData?.data?.data);
    setHeadToHead(
      headToHeadData?.data?.data[headToHeadData?.data?.data.length - 1]
    );
  }, [headToHeadData]);

  return (
    <>
      <Box flex="3">
        <main>
          <div className="header-img">
            <Box className="header-card">
              <h1>{headToHead?.competition?.name}</h1>
              <img
                src={`https://cdn.so3ody.com/scores/competitions/100x130/${headToHead?.competition?.id}.png`}
                alt="img"
              />
            </Box>
            <Box className="body-card">
              <Box className="card-box">
                <img src={stadium} alt="stadium" />
                <p>كامب نو</p>
              </Box>
              <Box className="blur-card">
                <Box className="team">
                  <img
                    src={`https://cdn.so3ody.com/scores/teams/50x50/${formationData?.data?.data?.teamA?.team?.id}.png`}
                    alt="team A"
                  />
                  <p>{formationData?.data?.data?.teamA?.team?.name}</p>
                </Box>
                <Box className="score">
                  <Box className="box-icon-label">
                    <img
                      src={`https://cdn.so3ody.com/scores/competitions/100x130/${headToHead?.competition?.id}.png`}
                      alt="img"
                    />
                    <span>{headToHead?.competition?.name}</span>
                  </Box>
                  <Box className="result">
                    {headToHead?.scoreA} : {headToHead?.scoreB}
                  </Box>
                  <p className="time">
                    {headToHead?.match_width === "90" ? "وقت كامل" : ""}
                  </p>
                </Box>
                <Box className="team">
                  <img
                    src={`https://cdn.so3ody.com/scores/teams/50x50/${formationData?.data?.data?.teamB?.team?.id}.png`}
                    alt="team B"
                  />
                  <p>{formationData?.data?.data?.teamB?.team?.name}</p>
                </Box>
              </Box>
              <Box className="card-box">
                <img src={calender} alt="calender" />
                <p>{headToHead?.timing}</p>
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
