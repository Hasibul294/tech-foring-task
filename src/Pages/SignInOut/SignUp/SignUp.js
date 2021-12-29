import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const currencies = [
  {
    value: "Female",
  },
  {
    value: "Male",
  },
  {
    value: "Others",
  },
];

const SignUp = () => {
  const [value, setValue] = useState(new Date());
  const [currency, setCurrency] = useState("Male");
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        height: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ paddingTop: "5px" }}>
        <Typography variant="h5" gutterBottom>
          SIGN UP
        </Typography>
        <Typography
          style={{ marginBottom: "30px" }}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          Register to get a job.
        </Typography>
        <form onSubmit="">
          <Grid
            container
            spacing={2}
            sx={{ width: "90%", margin: "0 auto", marginBottom: "30px" }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%", marginBottom: "10px" }}
                id="standard-basic"
                name="name"
                onChange={handleOnBlur}
                label="Your name"
                variant="outlined"
                color="success"
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date Of Birth"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField color="success" {...params} />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%", marginBottom: "10px" }}
                id="standard-basic"
                name="number"
                onChange={handleOnBlur}
                label="Phone Number"
                type="number"
                variant="outlined"
                color="success"
              />
              <TextField
                sx={{ width: "100%" }}
                id="outlined-select-currency"
                select
                label="Gender"
                value={currency}
                onChange={handleChange}
                helperText="Please select your Gender"
                color="success"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                name="email"
                onChange={handleOnBlur}
                label="Your Email"
                variant="outlined"
                color="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                name="password"
                onChange={handleOnBlur}
                label="Your Password"
                variant="outlined"
                type="password"
                color="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                name="password"
                onChange={handleOnBlur}
                label="Confirm Password"
                variant="outlined"
                type="password"
                color="success"
              />
            </Grid>
          </Grid>
          <Button
            sx={{ width: "50%", mb: 1 }}
            variant="contained"
            type="submit"
          >
            SIGN Up
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default SignUp;
