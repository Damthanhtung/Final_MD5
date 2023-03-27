import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./students/studentSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
