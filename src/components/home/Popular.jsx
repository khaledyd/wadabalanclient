import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";

export default function ActionAreaCard() {
  return (
    <Box width={"30%"}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
      
            component="img"
            height="140"
            image="https://images.pexels.com/photos/13691935/pexels-photo-13691935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="green iguana"
          />
        </CardActionArea>
      </Card>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
    </Box>
  );
}
