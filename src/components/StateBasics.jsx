import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const StateBasics = () => {
  var [pname, setPname] = useState("");
  var [mname, setmname] = useState("Jebin");
  // statehandling

  const changeName = () =>{
      
      if (mname  == "Jebin") {
          setmname("Odadaa")
      }
      else{
          setmname("Jebin")
      }

  }
  const changeHome = () => {
    setPname("To Home");
  };
  const changeGallery = () => {
    setPname("To Gallery");
  };
  const changeContact = () => {
    setPname("To Contact us");
  };

  return (
    <div>
      <br />
      <div >
      <Button variant="contained" onClick={changeHome}>
        Home
      </Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={changeGallery}>
        Gallery
      </Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={changeContact}>
        Contact Us
      </Button>
      </div>
      
      <hr />
      <Typography variant="h2">Welcome {pname}</Typography>
      <br />
      <br />
      <hr />
      <br />
      <Typography variant="h2">{mname}</Typography>
      <Button variant="contained" onClick={changeName}>
        issues
      </Button>
    </div>
  );
};

export default StateBasics;
