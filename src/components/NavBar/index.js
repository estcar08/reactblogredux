import React from "react";
import { AppBar, Toolbar } from "@mui/material/";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

export function NavBar({ children }) {
  const classes = useStyle();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>{children}</Toolbar>
        </AppBar>
      </Box>
      <div className={classes.offset}></div>
    </div>
  );
}
