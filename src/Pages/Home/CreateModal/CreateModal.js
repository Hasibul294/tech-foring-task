import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, MenuItem } from "@mui/material";

const shifts = [
  {
    value: "Day",
  },
  {
    value: "Night",
  },
];
const departments = [
  {
    value: "IT",
  },
  {
    value: "Network",
  },
  {
    value: "Security",
  },
];
const levels = [
  {
    value: "Mid",
  },
  {
    value: "Fresher",
  },
  {
    value: "senior",
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateModal = ({ open, handleClose }) => {
  const [shift, setShift] = useState("Day");
  const [department, setDepartment] = useState("IT");
  const [level, setLevel] = useState("Fresher");
  const [newPost, setNewPost] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newSignInData = { ...newPost };
    newSignInData[field] = value;
    setNewPost(newSignInData);
  };

  const handleShiftChange = (event) => {
    setShift(event.target.value);
  };
  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };
  const handleBookSubmit = (e) => {
    e.preventDefault();

    fetch("https://tf-practical.herokuapp.com/api/job_post/?format=json", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          handleClose();
          alert("Job post successfully done");
        }
      });
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            align="center"
            variant="h6"
            component="h2"
          >
            CREATE JOB
          </Typography>
          <form onSubmit={handleBookSubmit}>
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="jobTitle"
              label="Job Title"
              onBlur={handleOnBlur}
              required
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="jobType"
              label="Job Type"
              onBlur={handleOnBlur}
              required
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-select-currency"
              select
              name="gender"
              label="Shift"
              size="small"
              value={shift}
              onChange={handleShiftChange}
              onBlur={handleOnBlur}
              color="success"
            >
              {shifts.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-select-currency"
              select
              name="department"
              label="Departments"
              size="small"
              value={department}
              onChange={handleDepartmentChange}
              onBlur={handleOnBlur}
              color="success"
            >
              {departments.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-select-currency"
              select
              name="level"
              label="Levels"
              size="small"
              value={level}
              onChange={handleLevelChange}
              onBlur={handleOnBlur}
              color="success"
            >
              {levels.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              onBlur={handleOnBlur}
              size="small"
              name="vacancy"
              label="Vacancy"
              type="number"
              required
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="standard-basic"
              name="postDate"
              helperText="Post Date"
              type="date"
              required
              size="small"
              onBlur={handleOnBlur}
              variant="outlined"
              color="success"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="standard-basic"
              name="lastDateOfApply"
              helperText="Last Date Of Apply"
              type="date"
              required
              size="small"
              onBlur={handleOnBlur}
              variant="outlined"
              color="success"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="location"
              label="Job Location"
              onBlur={handleOnBlur}
              required
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              size="small"
              name="jobDescription"
              label="Job Description"
              onBlur={handleOnBlur}
              required
            />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" variant="contained" color="success">
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CreateModal;
