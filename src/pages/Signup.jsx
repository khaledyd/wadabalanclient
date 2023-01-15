import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, FormControl, Typography } from "@mui/material";
import { padding } from "@mui/system";
import Mininav from "../components/home/Mininav";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FormPropsTextFields() {
  const navigate = useNavigate()
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");


  const handlesubmit = async (e) => {

    e.preventDefault();
    try {
      const res = await axios.post("/auth/signup", {
        fullname,
        email,
        password,
        confirmPassword,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Mininav />
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
        sx={{ marginTop: "10%", paddingLeft: "20px", paddingRight: "20px" }}
      >
        <Typography variant="h4">Sign up</Typography>
        <Box component="form" sx={{}} noValidate autoComplete="off">
          <Box
            mr={20}
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: "100%" }}
          >
            <TextField
              label="FullName"
              type="text"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(e) => setFullname(e.target.value)}
            />
            <TextField
              label="Email"
              type="Email"
              variant="standard"
              sx={{ width: "100%", marginTop: "5px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "100%", marginTop: "5px" }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="Confrim Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "100%", marginTop: "5px" }}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              type="submit"
              onClick={handlesubmit}
              mt={3}
              sx={{
                marginTop: "20px",
                backgroundColor: "#F675A8",
                color: "#fff",
                padding: "5px 30px",
              }}
            >
              Sign Up
            </Button>
          </Box>

          <Typography variant="h6" sx={{ fontSize: "20px", marginTop: "10px" , cursor :"pointer" }} onClick ={()=>navigate("/login")}>
            log in
          </Typography>
      
        </Box>
      </Box>
    </Box>
  );
}
