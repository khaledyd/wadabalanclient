import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: max-content;
  height: max-content;
`;

const Footer = () => {
  return (
    <Box
      mt={30}
      sx={{
        display: "flex",
        flexDirection: "column",
        width:{
          sx: "100vw",
        },
        height: "max-height",
        backgroundColor:"red",

      }}
    >
      <Box pl={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          backgroundColor: "#554994",
          height: "300px",
          color: "#Fff",
          width:"100vw"
        }}
      >
        <Box pl={2} pt={2}>
          <Img src="./images/lg.png" />
        </Box>
        <Box pt={2} display={"flex"} sx={{ flexDirection: "column" }}>
          <Typography variant="h6">Wadabalan</Typography>
          <Typography variant="p">About</Typography>
          <Typography variant="p">Services</Typography>
          <Typography variant="p">Careers</Typography>
        </Box>
        <Box pt={2} display={"flex"} sx={{ flexDirection: "column" }}>
          <Typography variant="h6">Resources</Typography>
          <Typography variant="p">Blogs</Typography>
          <Typography variant="p">Press</Typography>
         
        </Box>
        <Box pr={2} pt={2} display={"flex"} sx={{ flexDirection: "column" }}>
          <Typography variant="h6">Use cases</Typography>
          <Typography variant="p">Organizers</Typography>
          <Typography variant="p">Creators</Typography>

        </Box>
      </Box>
      <Box  gap={2} alignItems={"center"} justifyContent={"center"} display={"flex"} sx={{ width: "100%", backgroundColor: "#fff", height: "100px" ,flexDirection: { xs: "column", sm: "column", md: "row" } , fontFamily: "Roboto, sans-serif" }}>
        {" "}
        <Box gap={2} display={"flex"}>
          <Typography variant="p">Terms |</Typography>
          <Typography variant="p">Privacy
 |</Typography>
          <Typography variant="p">Copywriter |</Typography>
        </Box>
        <Box>© 2011 wadabaln All Rights Reserved</Box>
      </Box>
    </Box>
  );
};

export default Footer;
