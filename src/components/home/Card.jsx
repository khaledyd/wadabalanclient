import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MediaCard({ events }) {
  const PF = "https://wadabalan-api.cyclic.app/images/";
  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "100%", sm: "50%", md: "25%" },
      }}
    >
      <Card sx={{ width: "100%", m: "30px", cursor: "pointer" }}>
        <Link to={`/card/${events._id}`}>
          {events.eventImg && (
            <CardMedia
              component="img"
              height="140"
              image={PF + events.eventImg}
              alt="green iguana"
              sx={{ width: "100%" }}
            />
          )}
        </Link>
        <CardContent sx={{ height: "200px" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ height: "max-content", width: "100%" }}
          >
            {events.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Typography variant="body2" sx={{ color: "#554994" }}>
              {events.date}
            </Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {events.eventtype}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${events.attendees.length} Attendees / ${events.spots}Left`}
          </Typography>
          <Typography variant="body1" sx={{ color: "#F675A8" }}>
            {events.userfullname}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
}
