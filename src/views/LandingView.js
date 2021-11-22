import React from "react";
import { LayoutContainer } from "../components/LayoutContainer";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useStyles from "../stylesConfig";

const LandingView = () => {
  const classes = useStyles();
  return (
    <div className={classes.backcover}>
      <NavBar>
        <Typography
          variant="h4"
          color="secondary"
          component={Link}
          to={"/home"}
          sx={{ flexGrow: 1, fontFamily: "Roboto Condensed", textDecoration: 'none' }}
        >
          Post Blog
        </Typography>
        <Button component={Link} to={"/login"} color="inherit">Login</Button>
      </NavBar>
      <LayoutContainer>
        <Typography
          sx={{
            fontFamily: "Roboto Condensed",
            fontSize: '80px'
          }}
          align="center"
          component="h1"
          variant="h1"
          color="secondary"
        >
          Welcome To My Blog
        </Typography>
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export default LandingView;
