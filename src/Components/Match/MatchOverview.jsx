import { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { win, lose, draw, leftArrow } from "../../assets/icons";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFormation, getHeadToHead } from "./../../Services";

const MatchOverview = () => {
  const { pathname } = useLocation();
  const [matchId, setMatchId] = useState(0);
  const [teamsIds, setTeamsIds] = useState({
    teamA: 0,
    teamB: 0,
  });

  useEffect(() => {
    const matchId = pathname.split("/")[2];
    setMatchId(matchId);
  }, [pathname]);

  const { data: formationData, isLoading } = useQuery(
    ["formation", matchId],
    () => getFormation(matchId)
  );

  const { data: headToHeadData, isLoading: isLoadingHeadToHead } = useQuery(
    ["headToHead", teamsIds],
    () => getHeadToHead(teamsIds)
  );

  useEffect(() => {
    setTeamsIds({
      teamA: formationData?.data?.data?.teamA?.team?.id,
      teamB: formationData?.data?.data?.teamB?.team?.id,
    });
  }, [formationData]);

  if (isLoading || isLoadingHeadToHead) return <div>تحميل...</div>;

  return (
    <Box>
      <p className="title">اخر خمس مباريات</p>
      <Divider sx={{ marginTop: "1rem" }} />
      <Box className="last-five-matches-wrapper">
        <Box className="card-team">
          <Box className="team">
            <img
              src={`https://cdn.so3ody.com/scores/teams/50x50/${formationData?.data?.data?.teamA?.team?.id}.png`}
              alt="team A"
            />
            <p>{formationData?.data?.data?.teamA?.team?.name}</p>
          </Box>
          <Box className="last-five-matches">
            {headToHeadData?.data?.data[0]?.teamALastFiveResults?.map(
              // eslint-disable-next-line array-callback-return
              (match, index) => {
                if (index < 5) {
                  return (
                    <img
                      key={index}
                      src={
                        match === "win" ? win : match === "lose" ? lose : draw
                      }
                      alt={`${match}`}
                    />
                  );
                }
              }
            )}
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box className="card-team">
          <Box className="team">
            <img
              src={`https://cdn.so3ody.com/scores/teams/50x50/${formationData?.data?.data?.teamB?.team?.id}.png`}
              alt="team B"
            />
            <p>{formationData?.data?.data?.teamB?.team?.name}</p>
          </Box>
          <Box className="last-five-matches">
            {headToHeadData?.data?.data[0]?.teamBLastFiveResults?.map(
              // eslint-disable-next-line array-callback-return
              (match, index) => {
                if (index < 5) {
                  return (
                    <img
                      key={index}
                      src={
                        match === "win" ? win : match === "lose" ? lose : draw
                      }
                      alt={`${match}`}
                    />
                  );
                }
              }
            )}
          </Box>
        </Box>
      </Box>
      <Divider />
      <p className="title">مواجهات مباشرة</p>
      <Box className="direct-confrontations-cards">
        {/* eslint-disable-next-line array-callback-return */}
        {headToHeadData?.data?.data?.map((item, index) => {
          if (index < 5) {
            return (
              <Box key={item?.id} className="direct-confrontations-card">
                <Box>{item?.timing}</Box>
                <Box className="blur-card">
                  <Box className="team">
                    <img
                      src={`https://cdn.so3ody.com/scores/teams/50x50/${item?.teamA_id}.png`}
                      alt="team A"
                    />
                    <p>{item?.teamA?.name}</p>
                  </Box>
                  <Box className="score">
                    <Box className="result">
                      {item?.scoreA} : {item?.scoreB}
                    </Box>
                    <p className="time">
                      {item?.match_width === "90"
                        ? "وفت كامل"
                        : item?.match_width}
                    </p>
                  </Box>
                  <Box className="team">
                    <img
                      src={`https://cdn.so3ody.com/scores/teams/50x50/${item?.teamB_id}.png`}
                      alt="team B"
                    />
                    <p>{item?.teamB?.name}</p>
                  </Box>
                </Box>
                <Box className="link">
                  <Link to={`/match/${item?.id}`}>صفحة المباراة</Link>
                  <img src={leftArrow} alt="left arrow" />
                </Box>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default MatchOverview;
