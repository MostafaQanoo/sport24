import { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { player, stadium } from "../../assets/images";
import { getFormation } from "../../Services";
import { useQuery } from "@tanstack/react-query";

const MatchFormation = () => {
  const [value, setValue] = useState(0);
  const [team, setTeam] = useState("teamA");

  const handleChange = (event, newValue) => {
    console.log("newValue: ", newValue);
    setValue(newValue);
    if (newValue === 0) {
      setTeam("teamA");
    } else if (newValue === 1) {
      setTeam("teamB");
    }
  };

  const { data: formationData } = useQuery(["formation"], () =>
    getFormation({ match_id: 78476 })
  );

  useEffect(() => {
    console.log("data?.data?.data: ", formationData?.data?.data);
  }, [formationData]);
  // const getData = async () => {
  //   const response = await getFormation();
  //   console.log("response: ", response);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Box className="match-formation">
      <Tabs
        className="match-formation-tabs"
        value={value}
        onChange={handleChange}
        centered={true}
        aria-label="tabs">
        <Tab label="ريال مدريد" />
        <Tab label="برشلونة" />
      </Tabs>

      <Box className="match-formation-content">
        <Box className="match-formation-content-stadium">
          {formationData?.data?.data?.[team]?.line_up?.map((item, index) => {
            return (
              <Box
                key={item.id}
                className={`match-formation-player ${item?.main_position}`}>
                <img
                  src={`https://cdn.so3ody.com/scores/people/50x50/${item.player_id}.png`}
                  alt="player"
                />
                <p>
                  {item?.player?.first_name +
                    " " +
                    item?.player?.last_name +
                    " " +
                    item?.tshirt_number}
                </p>
              </Box>
            );
          })}
          {/* <Box className="match-formation-player GK">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>
          <Box className="match-formation-player defender left">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>
          <Box className="match-formation-player defender middle">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>
          <Box className="match-formation-player defender right">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>

          <Box className="match-formation-player midfielder left">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>
          <Box className="match-formation-player midfielder middle">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>
          <Box className="match-formation-player midfielder right">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>

          <Box className="match-formation-player forwarder left">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>
          <Box className="match-formation-player forwarder middle">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box>
          <Box className="match-formation-player forwarder right">
            <img src={player} alt="player" />
            <p>ديماري جراي</p>
          </Box> */}

          <img src={stadium} alt="stadium" />
        </Box>
      </Box>

      <Box className="match-bench">
        <Typography variant="h6" className="match-bench-title">
          البدلاء
        </Typography>
        <Box className="match-bench-content">
          <Box className="match-bench-player">
            <Box className="match-bench-player-img">
              <img src={player} alt="player" />
            </Box>
            <Box className="match-bench-player-content">
              <Box className="match-bench-player-info">
                <Box className="match-bench-player-name">مارسيلو</Box>
                <Box className="match-bench-player-number">7</Box>
              </Box>
              <Box className="match-bench-player-position">حارس مرمى</Box>
            </Box>
          </Box>
          <Box className="match-bench-player">
            <Box className="match-bench-player-img">
              <img src={player} alt="player" />
            </Box>
            <Box className="match-bench-player-content">
              <Box className="match-bench-player-info">
                <Box className="match-bench-player-name">مارسيلو</Box>
                <Box className="match-bench-player-number">7</Box>
              </Box>
              <Box className="match-bench-player-position">حارس مرمى</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MatchFormation;
