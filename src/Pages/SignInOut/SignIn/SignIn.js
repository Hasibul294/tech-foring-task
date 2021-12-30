import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const SignIn = ({ handleChange }) => {
  const [loginData, setLoginData] = useState({});
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    fetch("https://tf-practical.herokuapp.com/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          localStorage.setItem("user-info", JSON.stringify(data));
          navigate("/dashboard");
          setError("");
        } else {
          setError(data.detail);
        }
      })
      .catch((error) => setError(error));
  };

  return (
    <Box
      sx={{
        boxShadow: 3,
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h5" gutterBottom>
          SIGN IN
        </Typography>
        <Typography
          style={{ marginBottom: "30px" }}
          variant="subtitle2"
          gutterBottom
        >
          Lorem ipsum dolor sit amet.
        </Typography>
        <form onSubmit={handleSignin}>
          <TextField
            sx={{ width: "80%", mb: 2 }}
            id="standard-basic"
            name="email"
            type="email"
            label="Your Email"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon color="success" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            onChange={handleOnBlur}
          />
          <TextField
            sx={{ width: "80%", mb: 2 }}
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
            variant="outlined"
            onChange={handleOnBlur}
          />
          {error && (
            <Alert
              sx={{ width: "70%", margin: "0 auto" }}
              severity="error"
              variant="filled"
            >
              {error}
            </Alert>
          )}
          <Button
            sx={{ width: "50%", mb: 1, mt: 3 }}
            variant="contained"
            type="submit"
          >
            SIGN IN
          </Button>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => handleChange("event", 1)}
          >
            <Button variant="text">
              Don't have an account? Please Sign Up
            </Button>
          </Link>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
