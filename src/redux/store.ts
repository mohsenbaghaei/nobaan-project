import { configureStore } from "@reduxjs/toolkit";
import textFieldReducer from "./textField/textFieldSlice";
import menuReducer from "./menu/menuSlice";

export const store = configureStore({
  reducer: {
    textField: textFieldReducer,
    menu: menuReducer,
  },
});
