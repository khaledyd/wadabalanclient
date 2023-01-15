import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export default function ActionAreaCard() {
  return (
    <Box
      gap={5}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
        },
      }}
    >
      <Box
        pl={5}
        gap={5}
        sx={{
          display: "flex",
          flex: "2",
          width: { xs: "100%", sm: "100%", md: "30%" },
          flexDirection: { xs: "column", sm: "row", md: "row" },
          alignItems: { xs: "center", sm: "flex-start", md: "flex-start" },
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/1007026/pexels-photo-1007026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Create account
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fill the necessery form
              </Typography>
        
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://images.pexels.com/photos/9969241/pexels-photo-9969241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Boom ! You are in
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box sx={{ width: { xs: "100%", sm: "100%", md: "30%" } }}>
        {" "}
        <Img src="./images/stepimg.png" />
      </Box>
    </Box>
  );
}
