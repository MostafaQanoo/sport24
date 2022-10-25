import { Box, List, Typography, useMediaQuery } from "@mui/material";
import Madrid from "../../assets/images/madrid.png";
import React, { useEffect, useState } from "react";

const TransitionPlayer = () => {
  const matches = useMediaQuery("(max-width:1000px)");

  const [value, setValue] = useState();

  useEffect(() => {
    if (matches) setValue("none");
  }, [matches]);

  return (
    <Box flex="1" display={value}>
      <List
        sx={{ background: "#F8F8F8", padding: "5px 10px" }}
        direction="column">
        <Typography>حراسة المرمى</Typography>
        {[0, 1, 2, 3, 4, 5].map((el) => (
          <li
            key={el}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 5px",
              width: "100%",
              borderBottom: "1px solid rgb(225 225 225)",
            }}>
            <img
              src={Madrid}
              alt=""
              width="28px"
              height="28px"
              style={{ objectFit: "contain" }}
            />
            <Typography marginLeft="2px" variant="caption">
              مانشستر يونايتد
            </Typography>
            <Typography variant="caption" color="red">
              انتقال
            </Typography>
            <Typography variant="caption">2021-08-28</Typography>
          </li>
        ))}
      </List>
    </Box>
  );
};

export default TransitionPlayer;
