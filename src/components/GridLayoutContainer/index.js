import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

export function GridLayoutContainer({children}) {
  const classes = useStyles({children});
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
     {children}
    </Grid>
  );
}
