import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MainInfo, TransitionPlayer } from "../Components";
// Image
import { useParams } from "react-router-dom";
import { getPlayerChampionships, getSinglePlayer } from "../Services";
import { useQuery } from "@tanstack/react-query";

const PlayerPage = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState({});

  const { data: playerData, isLoading } = useQuery(["playerData", id], () =>
    getPlayerChampionships(id)
  );

  useEffect(() => {
    const fetchPlayer = async () => {
      const response = await getSinglePlayer("people_id=" + id);
      setPlayer(response?.data?.data);
    };
    fetchPlayer();
  }, [id]);

  return (
    <>
      <Box flex="3">
        <main>
          {isLoading ? (
            <p>تحميل</p>
          ) : (
            <MainInfo player={player} playerData={playerData?.data?.data} />
          )}
        </main>
      </Box>
      <Box flex="1" className="right-side">
        <aside>
          <TransitionPlayer playerId={id} role={player?.position} />
        </aside>
      </Box>
    </>
  );
};

export default PlayerPage;
