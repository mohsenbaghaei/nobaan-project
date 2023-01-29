import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textField: "",
  telephone: "",
};

export const textFieldSlice = createSlice({
  name: "textField",
  initialState,
  reducers: {
    getTextField: (state, action) => {
      state.textField = action.payload;
    },
    telephoneNumber: (state, action) => {
      state.telephone = action.payload;
    },
  },
});

export const TextField = (state) => state.textField.textField;
export const Telephone = (state) => state.textField.telephone;

export const { getTextField, telephoneNumber } = textFieldSlice.actions;

export default textFieldSlice.reducer;
