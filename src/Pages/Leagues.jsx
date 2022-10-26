import React, { useEffect, useState } from "react";
import {
  ArrangeTable,
  MatchesTable,
  PageBanner,
  RangeTeamsGoals,
  TeamStatistics,
} from "../Components";
import { Box } from "@mui/material";
import { getMatches } from "../Services";
import { useLocation } from "react-router-dom";

const Leagues = () => {
  const { pathname } = useLocation();
  const urlParams = new URLSearchParams(window.location.search);
  const seasonId = urlParams.get("season_id");

  const [matches, setMatches] = useState([]);
  const [path, setPath] = useState([]);

  useEffect(() => {
    const path = pathname.split("/")[2];
    setPath(path);
    console.log("path: ", path);
    const fetchMatches = async () => {
      const response = await getMatches("season_id=" + seasonId);
      setMatches(response?.data?.data);
    };
    fetchMatches();
  }, [seasonId, pathname]);

  return (
    <>
      <Box flex="3">
        <main>
          <PageBanner
            leagueImage={`https://cdn.so3ody.com/scores/competitions/100x130/${path}.png`}
            leagueName={""}
          />
          <MatchesTable matches={matches} />
          <ArrangeTable />
          <TeamStatistics />
        </main>
      </Box>
      <Box flex="1">
        <RangeTeamsGoals />
      </Box>
    </>
  );
};

export default Leagues;
