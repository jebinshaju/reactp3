import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Read = () => {
  var [pname, setPname] = useState(" ");
  var [val, setVal] = useState();

  const inputhandler = (e) => {
    console.log(e.target.value);
    // setPname(e.target.value)
    setVal(e.target.value);
  };
  const changeName = () => {
    setPname(val);
    setVal("")
  };
  const clearName = () => {
    setPname("")
    setVal("")
  };

  return (
    <div>
      <br />
      <Typography variant="h2">Hello {pname}</Typography>
      <br />
      <TextField
        placeholder="Name"
        variant="outlined"
        value={val}
        onChange={inputhandler}
      />
      <Button variant="contained" onClick={changeName}>Change</Button>
      
      <Button variant="contained" onClick={clearName}>clear</Button>
    </div>
  );
};

export default Read;
