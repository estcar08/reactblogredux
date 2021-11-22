import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=1`
  );
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const postPost = createAsyncThunk(
  "posts/postPost",
  async (body, thunkAPI) => {
    const { posts } = thunkAPI.getState();
    const newPost = {
      userId: 1,
      id: posts.posts.length + 1,
      title: body.title,
      body: body.body,
    };
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

    return newPost;
  }
);


export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (body, thunkAPI) => {
    console.log(body.id);
    const idDelete = body.id;
    var response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${idDelete}`);
    return idDelete;
  }
);
