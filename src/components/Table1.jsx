import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

const Table1 = () => {
  var [name, setNames] = useState([
    {
      name: "CC",
      rollno: 1,
      age: 13,
    },
    {
      name: "ee",
      rollno: 5,
      age: 17,
    },
  ]);
  return (
    <div style={{ padding: "50px" }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "red", fontSize: "30px" }}>
                Name
              </TableCell>
              <TableCell style={{ color: "red", fontSize: "30px" }}>
                RollNo
              </TableCell>
              <TableCell style={{ color: "red", fontSize: "30px" }}>
                Class
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {name.map((value, index) => {
              return (
                <TableRow>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.rollno}</TableCell>
                  <TableCell>{value.age}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Table1;
