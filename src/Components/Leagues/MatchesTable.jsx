import React, { useState } from "react";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import RTL from "./../RTL";

const MatchesTable = ({ matches, seasonId }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className="matches-table-sec">
      <Stack
        style={{ padding: "40px 30px 15px" }}
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Typography variant="h5">مباريات</Typography>
        <Box sx={{ width: "120px" }}>
          <RTL>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                كل المباريات
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="كل المباريات"
                onChange={handleChange}>
                <MenuItem value={10}>كل المباريات</MenuItem>
              </Select>
            </FormControl>
          </RTL>
        </Box>
      </Stack>

      {matches.map((match) => (
        <Stack
          style={{
            padding: "1rem 2rem",
            borderBottom: "1px solid #eee",
            minHeight: "80px",
            marginBottom: "1.5rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          direction="row"
          key={uuidv4()}>
          <Typography variant="body2">
            {match?.timing?.split(" ")[0]}
          </Typography>

          <Link
            to={`/team/${match?.teamA?.id}?season_id=${seasonId}`}
            style={{
              textDecoration: "none",
              color: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "90%",
            }}>
            <img
              width="34px"
              height="34px"
              src={`https://cdn.so3ody.com/scores/teams/50x50/${match?.teamA?.id}.png`}
              style={{ objectFit: "contain" }}
              alt=""
            />
            <Typography>{match?.teamA?.name}</Typography>
          </Link>

          <Stack direction="column" justifyContent="space-between" height="90%">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="baseline"
              width="100px">
              <Typography variant="h4" fontWeight="500">
                {match?.scoreA}
              </Typography>
              <Typography variant="h4" fontWeight="500">
                :
              </Typography>
              <Typography variant="h4" fontWeight="500">
                {match?.scoreB}
              </Typography>
            </Box>
            <Typography textAlign="center">
              {match?.timing?.split(" ")[1]?.slice(0, -3)}
            </Typography>
          </Stack>

          <Link
            to={`/team/${match?.teamB?.id}?season_id=${seasonId}`}
            style={{
              textDecoration: "none",
              color: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              height: "90%",
            }}>
            <img
              width="34px"
              height="34px"
              src={`https://cdn.so3ody.com/scores/teams/50x50/${match?.teamB?.id}.png`}
              style={{ objectFit: "contain" }}
              alt=""
            />
            <Typography>{match?.teamB?.name}</Typography>
          </Link>

          <Link
            className="match-page"
            to={`/match/${match?.id}`}
            color="inherit"
            style={{ display: "flex", alignItems: "center", color: "#000" }}>
            صفحة المباراة
            <ArrowBackIosOutlinedIcon
              fontSize="small"
              style={{ marginRight: "10px" }}
            />
          </Link>
        </Stack>
      ))}
    </section>
  );
};

export default MatchesTable;
