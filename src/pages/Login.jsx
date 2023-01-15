import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { padding } from "@mui/system";
import Mininav from "../components/home/Mininav";
import { useState } from "react";
import axios from "axios";
import { loginStart ,loginSuccess, loginFailure  } from "../Redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function FormPropsTextFields() {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");

  const handlesubmit = async (e)=>{
    e.preventDefault();
    dispatch(loginStart());
    try{
      const res = await axios.post("/auth/signin" , {
        email,
        password
      })
      dispatch(loginSuccess(res.data))
      navigate("/");
      console.log(res.data)



    }
    catch(err){
      dispatch(loginFailure());
    }
  }


  return (
    <Box>
    <Mininav />
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent="center"
        sx={{ marginTop: "10%" ,  }}
      >
        <Typography variant="h4" >Log in</Typography>
        <Box component="form" sx={{}} noValidate autoComplete="off">
          <Box
            mr={20}
            display={"flex"}
            flexDirection={"column"}
            sx={{ width: "100%" , }}
          >
            <TextField
         
              label="Email"
              type="Email"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="standard"
              sx={{ width: "100%" }}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </Box>
          <Button onClick={handlesubmit} type="submit" mt={3} sx={{ marginTop: "20px", backgroundColor:"#F675A8" ,color:"#fff" , padding:"5px 30px"}}>Log in</Button>
          <Typography variant="h6" sx={{fontSize:"20px" , marginTop:"10px" , cursor :"pointer"}} onClick ={()=>navigate("/signup")} >Sign  Up</Typography>

        </Box>
      </Box>
    </Box>
  );
}
