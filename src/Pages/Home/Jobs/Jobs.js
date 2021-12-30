import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import JobsTable from "./JobsTable";
import WorkIcon from "@mui/icons-material/Work";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import GroupIcon from "@mui/icons-material/Group";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("user-info");
    const finalToken = JSON.parse(token).access;
    console.log(finalToken);
    fetch("https://tf-practical.herokuapp.com/api/job_post/?format=json", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${finalToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 220,
            height: 90,
          },
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#192a45",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            color="white"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WorkIcon sx={{ mr: 1 }}></WorkIcon>
            Total Active Job
          </Typography>
          <Typography variant="h6" color="white">
            10
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#192a45",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            color="white"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AccessTimeFilledIcon sx={{ mr: 1 }}></AccessTimeFilledIcon>
            INTERVIEW SCHEDULE
          </Typography>
          <Typography variant="h6" color="white">
            12.00
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#192a45",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            color="white"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FiberNewIcon sx={{ mr: 1 }}></FiberNewIcon>
            NEW HIRING
          </Typography>
          <Typography variant="h6" color="white">
            5
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            backgroundColor: "#192a45",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle2"
            color="white"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GroupIcon sx={{ mr: 1 }}></GroupIcon>
            TOTAL APPLICANTS
          </Typography>
          <Typography variant="h6" color="white">
            400
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="success"
          sx={{
            p: "8px",
            mb: 2,
          }}
        >
          <AddCircleIcon sx={{ mr: "5px" }}></AddCircleIcon> CREATE JOB
        </Button>
      </Box>
      <JobsTable jobs={jobs}></JobsTable>
    </Box>
  );
};

export default Jobs;
