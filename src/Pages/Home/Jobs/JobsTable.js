import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const JobsTable = ({ jobs }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>POST NAME</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="left">LEVEL</StyledTableCell>
            <StyledTableCell align="left">VACANCIES</StyledTableCell>
            <StyledTableCell align="left">SHIFT</StyledTableCell>
            <StyledTableCell align="left">TYPE </StyledTableCell>
            <StyledTableCell align="left">POST DATE</StyledTableCell>
            <StyledTableCell align="left">EXPIRE DATE</StyledTableCell>
            <StyledTableCell align="right">LOCATION</StyledTableCell>
            <StyledTableCell align="left">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map((job) => (
            <StyledTableRow key={job.id}>
              <StyledTableCell component="th" scope="row">
                {job.jobTitle}
              </StyledTableCell>
              <StyledTableCell align="left">
                {job.jobDescription}
              </StyledTableCell>
              <StyledTableCell align="left">{job.level}</StyledTableCell>
              <StyledTableCell align="center">{job.vacancies}</StyledTableCell>
              <StyledTableCell align="left">{job.shift}</StyledTableCell>
              <StyledTableCell align="left">{job.jobType}</StyledTableCell>
              <StyledTableCell align="left">{job.postDate}</StyledTableCell>
              <StyledTableCell align="right">
                {job.lastDateOfApply}
              </StyledTableCell>
              <StyledTableCell align="right">{job.location}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="outlined" color="success" sx={{ p: "5px" }}>
                  <EditIcon sx={{ mr: "3px" }}></EditIcon> EDIT
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JobsTable;
