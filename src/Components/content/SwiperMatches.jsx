import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/bundle";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import "swiper/swiper.min.css";
import "swiper/modules/free-mode/free-mode.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

// import required modules
import { FreeMode, Navigation } from "swiper";
import { Box } from "@mui/system";
import { Button, Stack, Typography, useMediaQuery } from "@mui/material";

import { default as Madrid } from "../../assets/images/team-a.png";
import { default as Lego } from "../../assets/images/team-b.png";

const SwiperMatches = () => {
  const [teams, setTeams] = useState(null);
  const [valueApi, setValueApi] = useState("http://localhost:5000/today");
  const [typeApi, setTypeApi] = useState("today");

  useEffect(() => {
    // if(typeApi === "today") {
    //   setValueApi("http://localhost:5000/today")
    // } else if (typeApi === "tommorw") {
    //   setValueApi("http://localhost:5000/tomorow")
    // } else {
    //   setValueApi("http://localhost:5000/tomorow")
    // }
  }, [typeApi]);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch(valueApi)
      // const data = await response.json();
      // setTeams(data)
      // console.log(data)
    };

    fetchData();
  }, [valueApi]);

  let btns = useRef("");
  const changeData = (type, index) => {
    setTypeApi(type);
    for (let i = 0; i < 3; i++) {
      btns.current.children[i].classList.remove("active");
    }
    btns.current.children[index - 1].classList.add("active");
  };

  const matches = useMediaQuery("(min-width:1200px)");
  const matches_mobile = useMediaQuery("(max-width:768px)");
  const [valueSlide, setValueSlide] = useState(4);

  // useEffect(() => {
  //   if(matches) setValueSlide(1)
  //   else setValueSlide(4)
  // }, [matches])

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
          <Button onClick={() => changeData("today", 1)} className="active">
            اليوم
          </Button>
          <Button onClick={() => changeData("tomorow", 2)}>غداً</Button>
          <Button onClick={() => changeData("today", 3)}>في الأمس</Button>
        </Stack>
        <Button>كل المباريات</Button>
      </Box>

      <Swiper
        slidesPerView={matches ? 4 : matches_mobile ? 1 : 2}
        spaceBetween={0}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper">
        {teams
          ? teams?.map((el) => (
              <SwiperSlide className="slide-swiper" key={el.id}>
                <Stack direction="column">
                  <Box
                    display="flex"
                    justifyContent="center"
                    paddingTop="22px"
                    marginBottom="5px">
                    <img width="20px" height="20px" src={Lego} alt="" />
                    <Typography marginRight={1}>الدوري الاسباني</Typography>
                  </Box>

                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center">
                      <img width="20px" height="20px" src={Madrid} alt="" />
                      <Typography variant="caption">ريال مدريد</Typography>
                    </Box>

                    <Typography
                      style={{
                        color: "#E6B01B",
                        border: "1px solid #E6B01B",
                        padding: "3px 17px",
                        borderRadius: "43%",
                      }}>
                      لم تبدأ
                    </Typography>

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center">
                      <img
                        width="20px"
                        height="20px"
                        src={el.imgTeamVs}
                        alt=""
                      />
                      <Typography variant="caption">{el.teamVs}</Typography>
                    </Box>
                  </Stack>

                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "102%",
                    }}
                    variant="caption">
                    24:00
                  </Typography>
                </Stack>
              </SwiperSlide>
            ))
          : [0, 1, 2, 3, 13, 4, 5, 54].map((e) => (
              <SwiperSlide className="slide-swiper" key={e}>
                <Stack direction="column">
                  <Box
                    display="flex"
                    justifyContent="center"
                    paddingTop="22px"
                    marginBottom="5px">
                    <img width="20px" height="20px" src={Lego} alt="" />
                    <Typography marginRight={1}>تيست</Typography>
                  </Box>

                  <Stack
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center">
                      <img width="20px" height="20px" src={Madrid} alt="" />
                      <Typography variant="caption">ريال مدريد</Typography>
                    </Box>

                    <Typography
                      style={{
                        color: "#E6B01B",
                        border: "1px solid #E6B01B",
                        padding: "3px 17px",
                        borderRadius: "43%",
                      }}>
                      لم تبدأ
                    </Typography>

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center">
                      <img width="20px" height="20px" src={Madrid} alt="" />
                      <Typography variant="caption">برشلونة</Typography>
                    </Box>
                  </Stack>

                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      width: "102%",
                    }}
                    variant="caption">
                    24:00
                  </Typography>
                </Stack>
              </SwiperSlide>
            ))}
      </Swiper>
    </Box>
  );
};

export default SwiperMatches;
