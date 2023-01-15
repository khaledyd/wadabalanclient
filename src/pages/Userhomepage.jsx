import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Aevnts from "../components/user/Aevnts";
import Events from "../components/user/Events";
import Mininav from "../components/home/Mininav";
import { useSelector } from "react-redux";

const Userhomepage = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      <Mininav />
      <Typography mt={10} variant="h4">
        Events You organazied
      </Typography>
      <Box
        flexWrap={"wrap"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          display: "flex",
          justifyContent: { xs: "center", ms: "flex-start", md: "flex-start" },
        }}
      >
        <Events />
        <Events />
        <Events />
        <Events />
      </Box>
    </div>
  );
};

export default Userhomepage;
