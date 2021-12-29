import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
  const [loginData, setLoginData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // useEffect(() => {
  //   fetch("https://tf-practical.herokuapp.com/api/login/")
  //     .then((res) => res.json)
  //     .then((data) => console.log(data));
  // }, []);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  // };

  async function handleLogin(e) {
    e.preventDefault();
    console.log(loginData);
    let result = await fetch("https://tf-practical.herokuapp.com/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/home");
  }

  return (
    <Box
      sx={{
        boxShadow: 3,
        height: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box style={{ paddingTop: "5px" }}>
        <Typography variant="h5" gutterBottom>
          SIGN IN
        </Typography>
        <Typography
          style={{ marginBottom: "30px" }}
          variant="subtitle2"
          gutterBottom
          component="div"
        >
          Lorem ipsum dolor sit amet.
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            sx={{ width: "75%", mb: 2 }}
            id="standard-basic"
            name="email"
            onChange={handleOnBlur}
            label="Your Email"
            variant="outlined"
          />
          <TextField
            sx={{ width: "75%", mb: 5 }}
            id="standard-basic"
            name="password"
            onChange={handleOnBlur}
            label="Your Password"
            variant="outlined"
            type="password"
          />
          <Button
            sx={{ width: "50%", mb: 1 }}
            variant="contained"
            type="submit"
          >
            SIGN IN
          </Button>
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">
              Don't have an account?Please register
            </Button>
          </NavLink>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
