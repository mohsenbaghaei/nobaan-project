import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "",
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const CurrentPage = (state) => state.menu.currentPage;

export const { changePage } = menuSlice.actions;

export default menuSlice.reducer;
