import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiGet = () => {
  var [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell>
                <b>Username</b>{" "}
              </TableCell>
              <TableCell>
                <b>Email</b>{" "}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((value) => {
              return (
                <TableRow>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.username}</TableCell>
                  <TableCell>{value.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ApiGet;
