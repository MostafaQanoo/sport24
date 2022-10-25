import { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { stadium } from "../../assets/images";
import { getFormation } from "../../Services";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const MatchFormation = () => {
  const [value, setValue] = useState(0);
  const [team, setTeam] = useState("teamA");
  const { pathname } = useLocation();
  const [matchId, setMatchId] = useState(0);
  const [players, setPlayers] = useState({
    defender: [],
    midfielder: [],
    forwarder: [],
    gk: [],
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setTeam("teamA");
    } else if (newValue === 1) {
      setTeam("teamB");
    }
  };

  useEffect(() => {
    const matchId = pathname.split("/")[2];
    setMatchId(matchId);
  }, [pathname]);

  const { data: formationData } = useQuery(["formation", matchId], () =>
    getFormation(matchId)
  );

  useEffect(() => {
    setPlayers({ defender: [], midfielder: [], forwarder: [], gk: [] });
    // eslint-disable-next-line array-callback-return
    formationData?.data?.data?.[team]?.line_up?.map((player) => {
      if (player?.main_position === "GK") {
        setPlayers((prev) => ({
          ...prev,
          gk: [...prev.gk, player],
        }));
      }
      if (player?.main_position === "defender") {
        setPlayers((prev) => ({
          ...prev,
          defender: [...prev.defender, player],
        }));
      }
      if (player?.main_position === "midfielder") {
        setPlayers((prev) => ({
          ...prev,
          midfielder: [...prev.midfielder, player],
        }));
      }
      if (player?.main_position === "forwarder") {
        setPlayers((prev) => ({
          ...prev,
          forwarder: [...prev.forwarder, player],
        }));
      }
    });
  }, [formationData, team]);

  return (
    <Box className="match-formation">
      <Tabs
        className="match-formation-tabs"
        value={value}
        onChange={handleChange}
        centered={true}
        aria-label="tabs">
        <Tab label={formationData?.data?.data?.teamA?.team?.name} />
        <Tab label={formationData?.data?.data?.teamB?.team?.name} />
      </Tabs>

      <Box className="match-formation-content">
        <Box className="match-formation-content-stadium">
          {/* {formationData?.data?.data?.[team]?.line_up?.map((item, index) => {
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
          })}*/}
          {players?.gk.length > 0 &&
            players?.defender.length > 0 &&
            players?.midfielder.length > 0 &&
            players?.forwarder.length > 0 && (
              <>
                <Box className="match-formation-player GK">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.gk[0]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.gk[0]?.player?.first_name +
                      " " +
                      players?.gk[0]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player defender left">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.defender[0]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.defender[0]?.player?.first_name +
                      " " +
                      players?.defender[0]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player defender middle">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.defender[1]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.defender[1].player?.first_name +
                      " " +
                      players?.defender[1].player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player defender middle-2">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.defender[2]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.defender[2]?.player?.first_name +
                      " " +
                      players?.defender[2]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player defender right">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.defender[3]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.defender[3]?.player?.first_name +
                      " " +
                      players?.defender[3]?.player?.last_name}
                  </p>
                </Box>

                <Box className="match-formation-player midfielder left">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.midfielder[0]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.midfielder[0]?.player?.first_name +
                      " " +
                      players?.midfielder[0]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player midfielder middle">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.midfielder[1]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.midfielder[1]?.player?.first_name +
                      " " +
                      players?.midfielder[1]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player midfielder right">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.midfielder[2]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.midfielder[2]?.player?.first_name +
                      " " +
                      players?.midfielder[2]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player forwarder left">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.forwarder[0]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.forwarder[0]?.player?.first_name +
                      " " +
                      players?.forwarder[0]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player forwarder middle">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.forwarder[1]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.forwarder[1]?.player?.first_name +
                      " " +
                      players?.forwarder[1]?.player?.last_name}
                  </p>
                </Box>
                <Box className="match-formation-player forwarder right">
                  <img
                    src={`https://cdn.so3ody.com/scores/people/50x50/${players?.forwarder[2]?.player_id}.png`}
                    alt="player"
                  />
                  <p>
                    {players?.forwarder[2]?.player?.first_name +
                      " " +
                      players?.forwarder[2]?.player?.last_name}
                  </p>
                </Box>
              </>
            )}

          <img src={stadium} alt="stadium" />
        </Box>
      </Box>

      <Box className="match-bench">
        <Typography variant="h6" className="match-bench-title">
          البدلاء
        </Typography>
        <Box className="match-bench-content">
          {formationData?.data?.data?.[team]?.sub_on_beanch?.map(
            (item, index) => {
              return (
                <Box key={index} className="match-bench-player">
                  <Box className="match-bench-player-img">
                    <img
                      src={`https://cdn.so3ody.com/scores/people/50x50/${item?.player_id}.png`}
                      alt="player"
                    />
                  </Box>
                  <Box className="match-bench-player-content">
                    <Box className="match-bench-player-info">
                      <Box className="match-bench-player-name">
                        {item?.player?.first_name +
                          " " +
                          item?.player?.last_name}
                      </Box>
                      <Box className="match-bench-player-number">
                        {item?.tshirt_number}
                      </Box>
                    </Box>
                    <Box className="match-bench-player-position">
                      {item?.main_position}
                    </Box>
                  </Box>
                </Box>
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MatchFormation;
