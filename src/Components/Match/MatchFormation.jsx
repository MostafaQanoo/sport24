import { useEffect, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { stadium } from "../../assets/images";
import { getFormation } from "../../Services";
import { useQuery } from "@tanstack/react-query";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useOutletContext } from "react-router-dom";

const MatchFormation = () => {
  const [token] = useOutletContext();
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

  const { data: formationData, isLoading } = useQuery(
    ["formation", matchId, token],
    () => getFormation(matchId)
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

  const playerPosition = {
    defender: "مدافع",
    midfielder: "وسط",
    forwarder: "هجوم",
    GK: "حارس مرمى",
  };

  const playerPositionClass = {
    1: ["p50"],
    2: ["p30", "p60"],
    3: ["p25", "p50", "p75"],
    4: ["p20", "p40", "p60", "p80"],
    5: ["p10", "p30", "p50", "p70", "p90"],
  };

  if (isLoading) return <div>تحميل...</div>;

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
          {players?.gk.length > 0 &&
            players?.defender.length > 0 &&
            players?.midfielder.length > 0 &&
            players?.forwarder.length > 0 && (
              <>
                <Link to={`/player/${players?.gk[0]?.player_id}`}>
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
                </Link>

                {players?.defender?.map((item, index, array) => {
                  return (
                    <Link to={`/player/${item?.player_id}`}>
                      <Box
                        key={uuidv4()}
                        className={`match-formation-player defender ${
                          playerPositionClass?.[array.length]?.[index]
                        }`}>
                        <img
                          src={`https://cdn.so3ody.com/scores/people/50x50/${item?.player_id}.png`}
                          alt="player"
                        />
                        <p>
                          {item?.player?.first_name +
                            " " +
                            item?.player?.last_name}
                        </p>
                      </Box>
                    </Link>
                  );
                })}
                {players?.midfielder?.map((item, index, array) => {
                  return (
                    <Link to={`/player/${item?.player_id}`}>
                      <Box
                        key={uuidv4()}
                        className={`match-formation-player midfielder ${
                          playerPositionClass?.[array.length]?.[index]
                        }`}>
                        <img
                          src={`https://cdn.so3ody.com/scores/people/50x50/${item?.player_id}.png`}
                          alt="player"
                        />
                        <p>
                          {item?.player?.first_name +
                            " " +
                            item?.player?.last_name}
                        </p>
                      </Box>
                    </Link>
                  );
                })}
                {players?.forwarder?.map((item, index, array) => {
                  return (
                    <Link to={`/player/${item?.player_id}`}>
                      <Box
                        key={uuidv4()}
                        className={`match-formation-player forwarder ${
                          playerPositionClass?.[array.length]?.[index]
                        }`}>
                        <img
                          src={`https://cdn.so3ody.com/scores/people/50x50/${item?.player_id}.png`}
                          alt="player"
                        />
                        <p>
                          {item?.player?.first_name +
                            " " +
                            item?.player?.last_name}
                        </p>
                      </Box>
                    </Link>
                  );
                })}
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
                <Link to={`/player/${item?.player_id}`} className="text-link">
                  <Box key={uuidv4()} className="match-bench-player">
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
                        {playerPosition[item?.main_position]}
                      </Box>
                    </Box>
                  </Box>
                </Link>
              );
            }
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MatchFormation;
