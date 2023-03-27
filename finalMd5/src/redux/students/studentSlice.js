import { createSlice } from "@reduxjs/toolkit";
import {
  getStudents,
  addStudents,
  deleteStudents,
  editStudents, findByIdStudents,
} from "../../services/studentService";

const initialState = {
  students: [],
  student:{}
};

const laptopsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(addStudents.fulfilled, (state, action) => {
      state.students.push(action.payload);
    });
    builder.addCase(deleteStudents.fulfilled, (state, action) => {
      state.students.splice(action.payload);
    });
    builder.addCase(editStudents.fulfilled, (state, action) => {
      state.students = action.payload;
    });
    builder.addCase(findByIdStudents.fulfilled, (state, action) => {
      state.student = action.payload
    })
  },
});
export default laptopsSlice.reducer;
