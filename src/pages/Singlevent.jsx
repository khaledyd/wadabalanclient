import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Mininav from "../components/home/Mininav";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import Footer from "../components/home/Footer";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link  , useNavigate} from "react-router-dom";


const Singlevent = () => {
  const navigate = useNavigate()
  const PF = "http://localhost:5004/images/";
  const [events, setEvents] = useState({});
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/events/" + path);
      console.log(res.data);
      setEvents(res.data);
    };
    getPost();
  }, [path]);
  return (
    <Box display={"flex"} flexDirection="column" justifyContent={"flex-start"}>
      <Mininav />
      <Box mt={10}>
        <Card sx={{ width: { xs: "100%", sm: "60", md: "70%" } }}>
          {events.eventImg && (
            <CardMedia
              component="img"
              height="340"
              image={PF + events.eventImg}
              alt="green iguana"
              sx={{ width: "100%" }}
            />
          )}
        </Card>
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
        <Box>
          <Typography variant="h4" sx={{ color: "#554994" }}>
            {events.title}
          </Typography>
          <Typography variant="h6"> {events.userfullname}</Typography>
          <Typography variant="h6">{events.eventtype}</Typography>
          <Typography variant="h6">
            {" "}
            <LocationOnIcon />
            {events.address}
          </Typography>
        </Box>
        <Box>{events.date}</Box>
      </Box>
      <Box
        pl={5}
        mt={10}
        sx={{ width: "60%", fontFamily: "Roboto, sans-serif" }}
      >
        <Typography variant="h3">Details</Typography>
        <Typography variant="p">{events.details}</Typography>
      </Box>
      <Box
        alignItems={"center"}
        pl={5}
        mt={4}
        display={"flex"}
        sx={{ width: "60%" }}
      >

          <Button variant="contained" sx={{ backgroundColor: "#F675A8" }} onClick = {()=>navigate(`/${events._id}`)}>
            Attend
          </Button>
     
        <Box sx={{ marginLeft: "50px" }}>{`${events.spots} spots lef`}</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Singlevent;
