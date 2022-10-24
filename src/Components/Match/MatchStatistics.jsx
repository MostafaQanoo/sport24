import React from "react";
import { Box } from "@mui/material";

const MatchStatistics = () => {
  const [match, setMatch] = React.useState([
    {
      id: 1,
      nameEn: "pneumatic docking",
      nameAr: "التحامات هوائية",
    },
    {
      id: 2,
      nameEn: "clearance",
      nameAr: "تخليص",
    },
    {
      id: 3,
      nameEn: "corner kicks",
      nameAr: "ضربات ركنيه",
    },
    {
      id: 4,
      nameEn: "crosses",
      nameAr: "عرضيات",
    },
    {
      id: 5,
      nameEn: "infractions against",
      nameAr: "مخالفات ضد",
    },
    {
      id: 6,
      nameEn: "Offside",
      nameAr: "التسلل",
    },
    {
      id: 7,
      nameEn: "passes",
      nameAr: "تمريرات",
    },
    {
      id: 9,
      nameEn: "correct passes",
      nameAr: "تمريرات صحيحة",
    },
    {
      id: 10,
      nameEn: "possession",
      nameAr: "الإستحواذ",
    },
    {
      id: 11,
      nameEn: "Shots on goal",
      nameAr: "تسديدات علي المرمى",
    },
    {
      id: 12,
      nameEn: "shots",
      nameAr: "تسديدات",
    },
    {
      id: 13,
      nameEn: "yellow cards",
      nameAr: "بطاقات صفراء",
    },
    {
      id: 14,
      nameEn: "red cards",
      nameAr: "بطاقات حمراء",
    },
    {
      id: 15,
      nameEn: "Passing accuracy",
      nameAr: "دقة التمرير",
    },
  ]);
  return (
    <Box className="statistic-cards">
      {match.map(({ id, nameAr }) => (
        <Box key={id} className="statistic-card">
          <Box className="badge bg-gray">0</Box>
          <Box className="badge-name">{nameAr}</Box>
          <Box className="badge bg-red">0</Box>
        </Box>
      ))}
    </Box>
  );
};

export default MatchStatistics;
