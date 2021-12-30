import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

const SignInOut = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ backgroundColor: "#fafafa" }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid
          style={{
            marginTop: "50px",
          }}
          item
          xs={12}
          md={6}
        >
          <Box
            style={{
              width: "80%",
              boxShadow: 3,
            }}
          >
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="SIGN IN" />
              <Tab label="SIGN UP" />
            </Tabs>
            <TabPanel value={value} index={0}>
              <SignIn handleChange={handleChange}></SignIn>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignUp></SignUp>
            </TabPanel>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Container>
  );
};

export default SignInOut;
