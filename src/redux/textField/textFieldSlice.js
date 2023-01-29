import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textField: "",
};

export const textFieldSlice = createSlice({
  name: "textField",
  initialState,
  reducers: {
    getTextField: (state, action) => {
      state.textField = action.payload;
    },
  },
});

export const TextField = (state) => state.textField.textField;

export const { getTextField } = textFieldSlice.actions;

export default textFieldSlice.reducer;
