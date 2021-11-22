import { createSlice } from "@reduxjs/toolkit";
import { getPosts, postPost, deletePost } from "./postsThunks";

const initialState = {
  posts: [],
  selectedPostId: "",
  isLoading: false,
  hasError: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPostId = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = [...state.posts, ...action.payload];
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      .addCase(postPost.pending, (state) => {
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(postPost.fulfilled, (state, action) => {
        state.posts = [...state.posts, action.payload];
        state.isLoading = false;
      })
      .addCase(postPost.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      })
      .addCase(deletePost.pending, (state) => {
        state.hasError = false;
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log(action.payload);
        var filteredItems = state.posts.filter(function(item)
        {
            if(item.id !== action.payload)
              return item;
        });
        console.log(filteredItems);
        state.posts = filteredItems;
        state.isLoading = false;
      })
      .addCase(deletePost.rejected, (state) => {
        state.hasError = true;
        state.isLoading = false;
      }),
});

export const { setSelectedPost } = postsSlice.actions;

export default postsSlice.reducer;
