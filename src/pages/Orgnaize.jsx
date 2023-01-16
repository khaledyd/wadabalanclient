import * as React from "react";
import dayjs from "dayjs";

import { lotStart, lotSuccess, lotFailure } from "../Redux/eventSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { axiosInstance } from "../config";
import Mininav from "../components/home/Mininav";

export default function BasicDateTimePicker() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const [date, setValue] = React.useState(dayjs("2022-04-07"));
  const [age, setAge] = React.useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [eventtype, setEventType] = useState([""]);
  const [address, setAddress] = useState("");
  const [spots, setspots] = useState("");
  const [userfullname, setName] = useState(currentUser.fullname);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(lotStart());
    const newEvent = {
      title,
      details,
      eventtype,
      address,
      spots,
      date,
      userfullname,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newEvent.eventImg = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axiosInstance.post("/events", newEvent);
   
      navigate("/");
    } catch (err) {
      dispatch(lotFailure());
    }
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      alignItems={"center"}
      flexDirection={"column"}
      display={"flex"}
      justifyContent={"center"}
      sx={{ width: "100%" }}
    >
      <Mininav />
      <Box
        mt={2}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        display={"flex"}
        sx={{
          width: { xs: "100%", sm: "100%", md: "40%" },
          backgroundColor: "#FAFAFA",
          boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
        }}
      >
        <Typography variant="h5" mt={10} sx={{ alignSelf: "center" }}>
          Organsize event
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          sx={{ width: { xs: "70%", sm: "70%", md: "70%" } }}
        >
          <TextField
            mt={10}
            id="filled-password-input"
            label="name"
            type="text"
            autoComplete="current-password"
            variant="filled"
            sx={{ marginTop: "10px", display: "none" }}
            onChange={(e) => setName(e.target.value)}
            value={currentUser.fullname}
          />
          <TextField
            mt={10}
            id="filled-password-input"
            label="Title"
            type="text"
            autoComplete="current-password"
            variant="filled"
            sx={{ marginTop: "10px" }}
            onChange={(e) => setTitle(e.target.value)}
          />

          <TextField
            mt={10}
            id="filled-password-input"
            label="Details"
            type="text"
            multiline
            rows={2}
            maxRows={4}
            autoComplete="current-password"
            variant="filled"
            sx={{ marginTop: "10px" }}
            onChange={(e) => setDetails(e.target.value)}
          />
          <InputLabel id="demo-simple-select-label">Event Type</InputLabel>

          <Select
            mt={10}
            onChange={(e) => setEventType(e.target.value)}
            labelId="demo-simple-select-label"
            label="Event Type"
            sx={{ marginTop: "10px" }}
          >
            <MenuItem value={"In person"}>In person</MenuItem>
            <MenuItem value={"Online"}>Online</MenuItem>
          </Select>

          {eventtype[1] ? (
            <TextField
              mt={10}
              sx={{ marginTop: "10px" }}
              id="filled-password-input"
              label="Address"
              type="text"
              autoComplete="current-password"
              variant="filled"
              onChange={(e) => setAddress(e.target.value)}
            />
          ) : (
            <TextField
              disabled
              mt={10}
              sx={{ marginTop: "10px" }}
              id="filled-password-input"
              label="Address"
              type="text"
              autoComplete="current-password"
              variant="filled"
              onChange={(e) => setAddress(e.target.value)}
            />
          )}
          <TextField
            mt={10}
            sx={{ marginTop: "10px" }}
            id="filled-password-input"
            label="Number of spots"
            type="number"
            variant="filled"
            onChange={(e) => setspots(e.target.value)}
          />
          <input
            style={{ marginTop: "10px", marginBottom: "20px" }}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              sx={{ marginTop: "10px" }}
              renderInput={(props) => <TextField {...props} />}
              label="DateTimePicker"
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </LocalizationProvider>

          <Button
            onClick={handleSubmit}
            type="submit"
            mt={15}
            variant="contained"
            sx={{
              width: "50%",
              marginTop: "10px",
              marginBottom: "50px",
              backgroundColor: "#F675A8",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
