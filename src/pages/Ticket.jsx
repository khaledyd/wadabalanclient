import { Button, Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/home/Footer";


const Ticket = ({ array }) => {
  return (
    <div>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"flex-start"}
      >
        <Box mt={10}>
          <Card sx={{ width: { xs: "100%", sm: "60", md: "70%" } }}></Card>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{
            width: { xs: "100%", sm: "100", md: "67%" },
            paddingRight: "20px",
            flexDirection: { xs: "column", sm: "row", md: "row" },
          }}
          mt={2}
          pl={5}
        >
          <Box sx={{
            width:"60%"
          
          }} >
            <Typography variant="h4" sx={{ color: "#554994"  }}>
              {array.title}
            </Typography>
            <Typography variant="h6" sx={{
              color:"#F675A8"
            }}> {array.userfullname}</Typography>
            <Typography variant="h6">{array.eventtype}</Typography>
            <Typography variant="h6"> {array.address}</Typography>
          </Box>
          <Box  >{new Date(array.date).toDateString()}</Box>
        </Box>
        <Box
          pl={5}
          mt={10}
          sx={{ width: "60%", fontFamily: "Roboto, sans-serif", marginTop:"20px" }}
        >
          <Typography variant="h3" sx={{
            color:"#554994"
          }}>Details</Typography>
          <Typography variant="p" sx={{
            marginTop:"30px"
          }} >{array.details}</Typography>
        </Box>
        <Box
          alignItems={"center"}
          pl={5}
          mt={4}
          display={"flex"}
          sx={{ width: "60%" }}
        >
          
        </Box>
 
      </Box>
    </div>
  );
};

export default Ticket;

