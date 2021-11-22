import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: "0",
  hasError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state, action) => {
			if(action.payload === "1"){
        localStorage.setItem("authorized", "1");
				state.hasError = false;
			}else{
        localStorage.setItem("authorized", "0");
				state.hasError = true;
			}
      console.log(localStorage.getItem('authorized'));
      state.isAuthenticated = localStorage.getItem('authorized');
    },
  },
});

export const { authenticate } = authSlice.actions;

export default authSlice.reducer;
