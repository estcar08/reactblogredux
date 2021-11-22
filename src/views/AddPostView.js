import { Button, TextField, Typography, CircularProgress, } from "@mui/material";
import { LoginContainer } from "../components/LoginContainer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import useStyles from "../stylesConfig";
import { authenticate } from "../features/auth/authSlice";
import { postPost } from "../features/posts/postsThunks";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPostsLoading,
  selectPostsError,
} from "../features/posts/postsSelectors";

function AddPostView() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useNavigate();
  const showError = useSelector(selectPostsError);
  const isLoading = useSelector(selectPostsLoading);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleLogout = () => {
    dispatch(authenticate("0"));
  };

  const handleLoginEmail = (event) => {
    event.preventDefault();
    dispatch(postPost({ title: title, body: body }));
    history("/posts");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

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
        <Button component={Link} to={"/posts"} color="inherit">
          Posts
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
      <LoginContainer
        title="Post Form"
        msg={showError ? <div>Error adding post</div> : null}
      >
        <form onSubmit={handleLoginEmail}>
          <div>
            <TextField
              label="Title"
              placeholder="Title..."
              type="text"
              name="title"
              required
              onChange={handleTitleChange}
              fullWidth
              variant="outlined"
            ></TextField>
            <div className={classes.inputSpacer}></div>
            <TextField
              multiline
              maxRows={4}
              label="Description"
              placeholder="Description... "
              type="text"
              name="body"
              required
              onChange={handleBodyChange}
              fullWidth
              variant="outlined"
            ></TextField>
          </div>
          <div>
            <div className={classes.buttonContainer}>
              <Button type="submit" disabled={isLoading} variant="outlined">
                {isLoading ? <CircularProgress size="1.5rem" /> : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </LoginContainer>
      <Footer />
    </div>
  );
}

export default AddPostView;
