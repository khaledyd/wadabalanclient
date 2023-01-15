import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Aevnts = () => {
  return (
    <div>
      <Box
        flexWrap={"wrap"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          display: "flex",
          justifyContent: { xs: "center", ms: "flex-start", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Card sx={{ maxWidth: 300, m: "30px" }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/1482476/pexels-photo-1482476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="green iguana"
            />
            <CardContent sx={{ height: "200px" }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ height: "max-content" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                consectetur adipisicing elit.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <Typography variant="body2" sx={{ color: "#554994" }}>
                  Sat,nov20,10:20AM
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Online Events
              </Typography>
              <Typography variant="body2" color="text.secondary">
                30 Attendees
              </Typography>
              <Typography variant="body1" sx={{ color: "#F675A8" }}>
                ice Eorks
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default Aevnts;
