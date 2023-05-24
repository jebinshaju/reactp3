import { AppBar, Button, Toolbar, Typography, colors } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography color={"lightyellow"} sx={{ flexGrow: 1 }} align="left">
            New app
          </Typography>

          <Button variant="contained" color="secondary">
            login
          </Button>
          <Button variant="contained" color="secondary">
            <Link to={"/t"} style={{ textDecoration: "none", color: "white"  }}>
              tables
            </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to={"/"} style={{ textDecoration: "none"  , color: "white" }}>
              home
            </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to={"/f"} style={{ textDecoration: "none", color: "white" }}>
              first
            </Link>
          </Button>
          <Button variant="contained" color="secondary">
            <Link to={"/api"} style={{ textDecoration: "none", color: "white" }}>
              axios
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
