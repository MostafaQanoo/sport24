import { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { teamA, teamB } from "../../assets/images";
import { win, lose, draw } from "../../assets/icons";
import { useLocation } from "react-router-dom";
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

  const { data: formationData } = useQuery(["formation", matchId], () =>
    getFormation(matchId)
  );

  const { data: headToHeadData } = useQuery(["headToHead", teamsIds], () =>
    getHeadToHead(teamsIds)
  );

  useEffect(() => {
    setTeamsIds({
      teamA: formationData?.data?.data?.teamA?.team?.id,
      teamB: formationData?.data?.data?.teamB?.team?.id,
    });
  }, [formationData]);

  useEffect(() => {}, [headToHeadData]);

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
    </Box>
  );
};

export default MatchOverview;
