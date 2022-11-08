import { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Link, Outlet, useLocation } from "react-router-dom";
import { calender, stadium } from "./../assets/icons";
import { getFormation, getHeadToHead } from "../Services";
import { useQuery } from "@tanstack/react-query";
import { RangeTeamsGoals } from "../Components";
import { getToken } from "./../Services/api/user";

const Match = () => {
  const { pathname } = useLocation();
  const [token, setToken] = useState("");
  const [value, setValue] = useState(0);
  const [matchId, setMatchId] = useState(0);
  const [headToHead, setHeadToHead] = useState(null);
  const [teamsIds, setTeamsIds] = useState({
    teamA: 0,
    teamB: 0,
  });

  const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_GRANT_TYPE } =
    process.env;

  const { data } = useQuery(["token"], () =>
    getToken({
      client_id: REACT_APP_CLIENT_ID,
      client_secret: REACT_APP_CLIENT_SECRET,
      grant_type: REACT_APP_GRANT_TYPE,
    })
  );

  useEffect(() => {
    localStorage.setItem(
      "token",
      JSON.stringify(data?.data?.data?.access_token)
    );
    setToken(data?.data?.data?.access_token);
  }, [data, token]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { data: formationData } = useQuery(["formation", matchId, token], () =>
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
                <p>{headToHead?.timing.split(' ')[0]}</p>
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
          <Outlet context={[token]} />
        </main>
      </Box>
      <Box flex="1" className="right-side">
        <RangeTeamsGoals />
      </Box>
    </>
  );
};

export default Match;
