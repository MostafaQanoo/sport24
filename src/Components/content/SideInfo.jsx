import { Box, List, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import Lego from "../../assets/images/lego.png";

const SideInfo = () => {
  const matches = useMediaQuery("(max-width:1000px)");
  const [value, setValue] = useState();

  useEffect(() => {
    if (matches) setValue("none");
  }, [matches]);

  return (
    <Box flex="1" display={value} maxWidth="17%">
      <List
        sx={{ background: "#F8F8F8", padding: "2px 2px" }}
        direction="column">
        {[0, 1, 2, 3, 4, 5].map((el) => (
          <li
            key={el}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              padding: "8px 5px",
              borderBottom: "1px solid rgb(225 225 225)",
            }}>
            <img
              src={Lego}
              alt=""
              width="28px"
              height="28px"
              style={{ marginLeft: "10px" }}
            />
            <Typography variant="h6" style={{ fontSize: "15px" }}>
              الدوري الإنجليزي لكرة القدم
            </Typography>
          </li>
        ))}
      </List>
      <img
        style={{
          marginTop: "25px",
          border: "3px solid #94b7db",
          objectFit: "contain",
        }}
        src="https://via.placeholder.com/200X600/#DFE6FA"
        alt=""
      />
    </Box>
  );
};

export default SideInfo;
