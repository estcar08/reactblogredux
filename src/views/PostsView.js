import React from "react";
import { useEffect, useState, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { GridLayoutContainer } from "../components/GridLayoutContainer";
import { LayoutContainer } from "../components/LayoutContainer";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { OutlinedCard } from "../components/Card";
import {
  Button,
  Typography,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useStyles from "../stylesConfig";

import { getPosts } from "../features/posts/postsThunks";
import { authenticate} from '../features/auth/authSlice';
import {
  selectPosts,
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelectors";
import { useDispatch, useSelector } from "react-redux";

const PostsView = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectPostsLoading);
  const error = useSelector(selectPostsError);

  const handleLogout = () => {
    dispatch(authenticate("0"));
  };

  useEffect(() => {
    if(posts.length === 0){
      dispatch(getPosts());
    }
  }, [dispatch]);

  const refetcPosts = () => {
    dispatch(getPosts());
  };

  const classes = useStyles();

  if (isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );
  }
  console.log(posts);
  return (
    <div className={classes.backcover}>
      <NavBar>
        <Typography
          variant="h4"
          color="secondary"
          sx={{ flexGrow: 1, fontFamily: "Roboto Condensed" }}
        >
          Post Blog
        </Typography>
        <Button
          component={Link}
          to={"/formPost"}
          color="inherit"
        >
         Add Post
        </Button>
        <Button
          onClick={() => handleLogout()}
          component={Link}
          to={"/home"}
          color="inherit"
        >
          Logout
        </Button>
      </NavBar>

      {error ? (
        <LayoutContainer>
          <Alert
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            severity="error"
          >
            <AlertTitle>Error</AlertTitle>
            There was an error fetching the information!
            <div>
              <Button variant="outlined" onClick={refetcPosts}>
                Click to refetch
              </Button>
            </div>
          </Alert>
        </LayoutContainer>
      ) : (
        <GridLayoutContainer>
          {posts.map((row, index) => (
            <Grid key={row.id} item xs={12} sm={6} md={4}>
              <OutlinedCard
                key={row.id}
                id={row.id}
                title={row.title}
                body={row.body}
              />
            </Grid>
          ))}
        </GridLayoutContainer>
      )}
      <Footer />
    </div>
  );
};

export default PostsView;
