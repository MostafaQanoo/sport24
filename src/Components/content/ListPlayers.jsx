import { Box, List, Typography, useMediaQuery } from "@mui/material";
// import Madrid from "../../img/madrid.png";
import React, { useEffect, useState } from "react";
import { Stack } from "@mui/system";


const ListPlayers = () => {
  const matches = useMediaQuery("(max-width:1000px)");

  const [valueDisplay, setValueDisplay] = useState();

  useEffect(() => {
    if (matches) setValueDisplay("none");
    else setValueDisplay("flex");
  }, [matches]);

  return (
    <Box flex="1" display={valueDisplay} flexDirection="column">
      <Typography color="blue" padding="5px 0 10px 0">قائمة اللاعبين</Typography>
      <List
        sx={{ background: "#F8F8F8", padding: "5px 10px" }}
        direction="column"
      >
        <Typography>حراسة المرمى</Typography>
        {[0, 1, 2, 3].map((el) => (
          <li
            key={el}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 5px",
              width: "96%",
              borderBottom: "1px solid rgb(225 225 225)",
            }} >

            <Stack direction="row">
              <img
                src="https://via.placeholder.com/30"
                alt=""
                width="30px"
                height="30px"
                style={{ objectFit: "contain", borderRadius: "50%" }}
              />
              <Stack direction="column" marginRight="10px">
                <Typography marginLeft="2px" lineHeight="1.22" variant="body1">كريم بنزيمة</Typography>
                <Typography marginLeft="2px" variant="caption">حارس مرمى</Typography>
              </Stack>
            </Stack>

            <img src={`https://cdn.so3ody.com/scores/teams/50x50/1744.png`} width="30px" height="30px" style={{ objectFit: "contain" }} alt="" />
          </li>
        ))}
      </List>

      <Box margin="10px 0" />

      {/* خط الدفاع */}
      <List
        sx={{ background: "#F8F8F8", padding: "5px 10px" }}
        direction="column"
      >
        <Typography paddingTop="15px">خط الدفاع</Typography>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
          <li
            key={el}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 5px",
              width: "96%",
              borderBottom: "1px solid rgb(225 225 225)",
            }} >

            <Stack direction="row">
              <img
                src="https://via.placeholder.com/30"
                alt=""
                width="30px"
                height="30px"
                style={{ objectFit: "contain", borderRadius: "50%" }}
              />
              <Stack direction="column" marginRight="10px">
                <Typography marginLeft="2px" lineHeight="1.22" variant="body1">كريم بنزيمة</Typography>
                <Typography marginLeft="2px" variant="caption">حارس مرمى</Typography>
              </Stack>
            </Stack>

            <img src={`https://cdn.so3ody.com/scores/teams/50x50/1744.png`} width="30px" height="30px" style={{ objectFit: "contain" }} alt="" />
          </li>
        ))}
      </List>
      <Box margin="10px 0" />

      {/* خط الوسط */}
      <List
        sx={{ background: "#F8F8F8", padding: "5px 10px" }}
        direction="column"
      >
        <Typography paddingTop="15px">خط الوسط</Typography>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <li
            key={el}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 5px",
              width: "96%",
              borderBottom: "1px solid rgb(225 225 225)",
            }} >

            <Stack direction="row">
              <img
                src="https://via.placeholder.com/30"
                alt=""
                width="30px"
                height="30px"
                style={{ objectFit: "contain", borderRadius: "50%" }}
              />
              <Stack direction="column" marginRight="10px">
                <Typography marginLeft="2px" lineHeight="1.22" variant="body1">كريم بنزيمة</Typography>
                <Typography marginLeft="2px" variant="caption">حارس مرمى</Typography>
              </Stack>
            </Stack>

            <img src={`https://cdn.so3ody.com/scores/teams/50x50/1744.png`} width="30px" height="30px" style={{ objectFit: "contain" }} alt="" />
          </li>
        ))}
      </List>
      <Box margin="10px 0" />

      {/* خط الهجوم */}
      <List
        sx={{ background: "#F8F8F8", padding: "5px 10px" }}
        direction="column"
      >
        <Typography paddingTop="15px">خط الهجوم</Typography>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <li
            key={el}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 5px",
              width: "96%",
              borderBottom: "1px solid rgb(225 225 225)",
            }} >

            <Stack direction="row">
              <img
                src="https://via.placeholder.com/30"
                alt=""
                width="30px"
                height="30px"
                style={{ objectFit: "contain", borderRadius: "50%" }}
              />
              <Stack direction="column" marginRight="10px">
                <Typography marginLeft="2px" lineHeight="1.22" variant="body1">كريم بنزيمة</Typography>
                <Typography marginLeft="2px" variant="caption">حارس مرمى</Typography>
              </Stack>
            </Stack>

            <img src={`https://cdn.so3ody.com/scores/teams/50x50/1744.png`} width="30px" height="30px" style={{ objectFit: "contain" }} alt="" />
          </li>
        ))}
      </List>
      
    </Box>
  );
};

export default ListPlayers;
