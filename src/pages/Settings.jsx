import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { padding } from "@mui/system";
import Mininav from "../components/home/Mininav";

export default function Settings() {
  return (
    <Box>
    <Mininav/>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
        sx={{ marginTop: "10%" , paddingLeft:"20px"  ,paddingRight:"20px" }}
      >
        <Typography variant="h4" >Settings</Typography>
        <Box component="form" sx={{}} noValidate autoComplete="off">
          <Box
            mr={20}
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: "100%" , }}
            
          >
              <TextField
              id="standard-password-input"
              label="FullName"
              type="text"
              variant="standard"
              sx={{ width: "100%" }}
            />
            <TextField
        
              id="standard-password-input"
              label="Email"
              type="Email"
              variant="standard"
              sx={{ width: "100%" , marginTop:"5px" }}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "100%" , marginTop:"5px" }}
            />
               <TextField
              id="standard-password-input"
              label="Confrim Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "100%" , marginTop:"5px" }}
            />
          </Box>
          <Button mt={3} sx={{ marginTop: "20px", backgroundColor:"#F675A8" ,color:"#fff" , padding:"5px 30px"}}>update infromations</Button>
        
        </Box>
      </Box>
    </Box>
  );
}
