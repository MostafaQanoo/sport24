import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFormation, getHeadToHead, getStatistics } from "./../../Services";

const MatchStatistics = () => {
  const { pathname } = useLocation();
  const [matchId, setMatchId] = useState(0);
  const [teamsIds, setTeamsIds] = useState({
    teamA: 0,
    teamB: 0,
  });
  const [teamsStatistics, setTeamsStatistics] = useState({
    teamA: {},
    teamB: {},
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

  const { data: statisticsTeamsData } = useQuery(["statistics", matchId], () =>
    getStatistics(matchId)
  );

  useEffect(() => {
    setTeamsStatistics({
      teamA: statisticsTeamsData?.data?.data?.teamA,
      teamB: statisticsTeamsData?.data?.data?.teamB,
    });
  }, [statisticsTeamsData]);

  useEffect(() => {
    setTeamsIds({
      teamA: formationData?.data?.data?.teamA?.team?.id,
      teamB: formationData?.data?.data?.teamB?.team?.id,
    });
  }, [formationData]);

  const match = [
    {
      id: 1,
      key: "aerialsWon",
      nameEn: "pneumatic docking",
      nameAr: "التحامات هوائية",
    },
    {
      id: 2,
      key: "clearances",
      nameEn: "clearance",
      nameAr: "تخليص",
    },
    {
      id: 3,
      key: "corners",
      nameEn: "corner kicks",
      nameAr: "ضربات ركنيه",
    },
    {
      id: 4,
      key: "crosses",
      nameEn: "crosses",
      nameAr: "عرضيات",
    },
    {
      id: 5,
      key: "fouls",
      nameEn: "infractions against",
      nameAr: "مخالفات ضد",
    },
    {
      id: 6,
      key: "offsides",
      nameEn: "Offside",
      nameAr: "التسلل",
    },
    {
      id: 7,
      key: "passes",
      nameEn: "passes",
      nameAr: "تمريرات",
    },
    {
      id: 9,
      key: "passesCompleted",
      nameEn: "correct passes",
      nameAr: "تمريرات صحيحة",
    },
    {
      id: 10,
      key: "possession",
      nameEn: "possession",
      nameAr: "الإستحواذ",
    },
    {
      id: 11,
      key: "shotOnTarget",
      nameEn: "Shots on goal",
      nameAr: "تسديدات علي المرمى",
    },
    {
      id: 12,
      key: "shotsTotal",
      nameEn: "shots",
      nameAr: "تسديدات",
    },
    {
      id: 13,
      key: "yellowCards",
      nameEn: "yellow cards",
      nameAr: "بطاقات صفراء",
    },
    {
      id: 14,
      key: "redCards",
      nameEn: "red cards",
      nameAr: "بطاقات حمراء",
    },
    {
      id: 15,
      key: "passingPercentage",
      nameEn: "Passing accuracy",
      nameAr: "دقة التمرير",
    },
  ];
  return (
    <Box className="statistic-cards">
      {match.map(({ key, id, nameAr }) => (
        <Box key={id} className="statistic-card">
          <Box
            className={`
            badge ${
              teamsStatistics?.teamA?.[key] > teamsStatistics?.teamB?.[key]
                ? "bg-red"
                : "bg-gray"
            }`}>
            {teamsStatistics?.teamA?.[key] || "0"}
          </Box>
          <Box className="badge-name">{nameAr}</Box>
          <Box
            className={`
            badge ${
              teamsStatistics?.teamB?.[key] > teamsStatistics?.teamA?.[key]
                ? "bg-red"
                : "bg-gray"
            }`}>
            {teamsStatistics?.teamB?.[key] || "0"}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MatchStatistics;
