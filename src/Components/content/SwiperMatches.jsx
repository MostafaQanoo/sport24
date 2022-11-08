import React, { useEffect, useRef, useState } from "react";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/navigation/navigation.min.css";
import { FreeMode, Navigation } from "swiper";
import { Box } from "@mui/system";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { getCompetitions, getMatches } from "../../Services";
import { todayDate, tomorrowDate, yesterdayDate } from "../../Utils";

const SwiperMatches = () => {
  const [date, setDate] = useState(["today", todayDate()]);
  const [competitions, setCompetitions] = useState([]);
  const [matches, setMatches] = useState([]);
  let btns = useRef("");
  const matchess = useMediaQuery("(min-width:1200px)");
  const matches_mobile = useMediaQuery("(max-width:768px)");

  const fetchCompititions = async () => {
    const response = await getCompetitions("");
    const europComp = await getCompetitions("id=401");
    const champComp = await getCompetitions("id=400");
    setCompetitions([
      ...response?.data?.data?.slice(0, 5),
      europComp?.data?.data[0],
      champComp?.data?.data[0],
    ]);
  };

  const fetchMatches = async () => {
    const currentSeason = competitions[0]?.currentSeason?.id;
    const response = await getMatches(
      `season_id=${currentSeason}&date_from=${date[1]}&date=${date[1]}`
    );
    setMatches(response?.data?.data);
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   fetchCompititions();
    //   if (competitions.length) fetchMatches();
    // }, 1000);

    // return () => {
    //   clearInterval(interval);
    // };
    fetchCompititions();
    if (competitions.length) fetchMatches();
  }, []);

  useEffect(() => {
    if (competitions.length) fetchMatches();
  }, [date, competitions]);

  const setMatchesComponent = (matches) => {
    return matches?.map((match) => (
      <SwiperSlide className="slide-swiper" key={match?.id}>
        <Stack direction="column">
          <Box
            display="flex"
            justifyContent="center"
            paddingTop="22px"
            marginBottom="5px">
            <img
              width="20px"
              height="20px"
              src={`https://cdn.so3ody.com/scores/competitions/100x130/${competitions[0]?.id}.png`}
              alt=""
            />
            <Typography marginRight={1}>{competitions[0]?.name}</Typography>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                width="20px"
                height="20px"
                src={`https://cdn.so3ody.com/scores/teams/50x50/${match?.teamA?.id}.png`}
                alt={match?.teamA?.name}
              />
              <Typography variant="caption">{match?.teamA?.name}</Typography>
            </Box>

            <Box>
              <Typography
                style={{
                  color: "#E6B01B",
                  border: "1px solid #E6B01B",
                  padding: "3px 17px",
                  borderRadius: "43%",
                }}>
                <div className="teams-score">
                  <p className="socre">
                    <span>{match?.scoreA}</span> : <span>{match?.scoreB}</span>
                  </p>
                  {/* <p className="note">وقت كامل</p> */}
                </div>
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "5px",
                }}
                variant="caption">
                {match?.timing.split(" ")[1]}
              </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center">
              <img
                width="20px"
                height="20px"
                src={`https://cdn.so3ody.com/scores/teams/50x50/${match?.teamB?.id}.png`}
                alt={match?.teamB?.name}
              />
              <Typography variant="caption">{match?.teamB?.name}</Typography>
            </Box>
          </Stack>
        </Stack>
      </SwiperSlide>
    ));
  };

  return (
    <Box className="mainSwiperComponent">
      <Box className="topSwiper">
        <Stack
          ref={btns}
          direction="row"
          width="20%"
          height="100%"
          justifyContent="space-between"
          textAlign="center">
          <Button
            className={`btn ${date[0] === "today" ? "active" : ""}`}
            onClick={() => setDate(["today", todayDate()])}>
            اليوم
          </Button>
          <Button
            className={`btn ${date[0] === "tomorrow" ? "active" : ""}`}
            onClick={() => setDate(["tomorrow", tomorrowDate()])}>
            غداً
          </Button>
          <Button
            className={`btn ${date[0] === "yesterday" ? "active" : ""}`}
            onClick={() => setDate(["yesterday", yesterdayDate()])}>
            في الأمس
          </Button>
          {/* <Button onClick={() => changeData("today", 1)} className="active">
            اليوم
          </Button>
          <Button onClick={() => changeData("tomorrow", 2)}>غداً</Button>
          <Button onClick={() => changeData("today", 3)}>في الأمس</Button> */}
        </Stack>
        <Button>كل المباريات</Button>
      </Box>

      <Swiper
        slidesPerView={matchess ? 4 : matches_mobile ? 1 : 2}
        spaceBetween={0}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper">
        {matches.length === 0 ? (
          <SwiperSlide
            style={{
              color: "#fff",
            }}>
            لا يوجد مباريات
          </SwiperSlide>
        ) : (
          setMatchesComponent(matches)
        )}
      </Swiper>
    </Box>
  );
};

export default SwiperMatches;
