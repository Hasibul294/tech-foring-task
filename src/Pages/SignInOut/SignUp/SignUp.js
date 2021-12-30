import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const genders = [
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
  const [gender, setGender] = useState("Male");
  const [signInData, setSignInData] = useState({});
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newSignInData = { ...signInData };
    newSignInData[field] = value;
    setSignInData(newSignInData);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setErrorEmail("");
    setErrorPass("");
    if (signInData.password === signInData.password2) {
      fetch("https://tf-practical.herokuapp.com/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.password);
          if (signInData.email === data.email) {
            navigate("/dashboard");
            setErrorEmail("");
            setErrorPass("");
          } else {
            if (data.email) {
              setErrorEmail(data.email);
            } else if (data.password) {
              setErrorPass(data.password);
            }
          }
        });
    } else {
      setErrorPass("Password Did not Match");
    }
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
        <form onSubmit={handleSignUp}>
          <Grid
            container
            spacing={2}
            sx={{ width: "90%", margin: "0 auto", marginBottom: "10px" }}
          >
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%", marginBottom: "10px" }}
                id="standard-basic"
                name="full_name"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle color="success" />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleOnBlur}
                label="Your name"
                variant="outlined"
                color="success"
              />
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                name="birthDate"
                type="date"
                helperText="Please select your Gender"
                required
                onBlur={handleOnBlur}
                variant="outlined"
                color="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%", marginBottom: "10px" }}
                id="standard-basic"
                name="phone_number"
                onBlur={handleOnBlur}
                label="Phone Number"
                type="number"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneIcon color="success" />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                color="success"
              />
              <TextField
                sx={{ width: "100%" }}
                id="outlined-select-currency"
                select
                name="gender"
                label="Gender"
                value={gender}
                onChange={handleChange}
                onBlur={handleOnBlur}
                helperText="Please select your Gender"
                color="success"
              >
                {genders.map((option) => (
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
                type="email"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon color="success" />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleOnBlur}
                label="Your Email"
                variant="outlined"
                color="success"
                error={errorEmail}
                helperText={errorEmail}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                name="password"
                type="password"
                label="Your Password"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="success" />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleOnBlur}
                variant="outlined"
                color="success"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                id="standard-basic"
                name="password2"
                type="password"
                label="Confirm Password"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="success" />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleOnBlur}
                variant="outlined"
                color="success"
              />
            </Grid>
          </Grid>
          {errorPass && (
            <Alert
              sx={{ width: "85%", margin: "0 auto" }}
              severity="error"
              variant="filled"
            >
              {errorPass}
            </Alert>
          )}
          <Button
            sx={{ width: "50%", mb: 1, mt: 3 }}
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
