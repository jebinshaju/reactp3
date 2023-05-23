// rafce
import React from "react";

import { Button, IconButton, TextField, Typography } from "@mui/material";
const First = () => {
  return (
    <div>
      <h1>Jebin Shaju</h1>
      <input placeholder="Name" />
      <br />
      <input type="password" placeholder="Password"></input>
      <br />
      <button>Submit</button>
      <br />
      <Typography variant="h1">Jebin Shaju</Typography>
      <br />
      <TextField type="password" variant="outlined" label="Name" />
      <br />
      <br />
      <Button variant="contained" >submit</Button>

      
     

    </div>
  );
};

export default First;
