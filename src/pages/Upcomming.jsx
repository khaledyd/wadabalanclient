import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/home/Navbar";
import Card from "../components/home/Card";
import Footer from "../components/home/Footer";

const Upcomming = () => {
  return (
    <div>
      <Navbar />

      <Typography
        variant="h3"
        sx={{
          m: "30px",
          color: "#F675A8",
        }}
      >
        Upcomming events
      </Typography>
      <Box
        flexWrap={"wrap"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          display: "flex",
          justifyContent: { xs: "center", ms: "flex-start", md: "flex-start" },
        }}
      >
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      
    

      </Box>
      <Footer/>

    </div>
  );
};

export default Upcomming;
