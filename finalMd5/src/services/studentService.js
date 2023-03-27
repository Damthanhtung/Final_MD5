import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getStudents = createAsyncThunk("students/getStudents", async () => {
  const res = await axios.get("http://localhost:3000/students");

  return res.data;
});

export const addStudents = createAsyncThunk(
  "students/addStudents",
  async (data) => {
    const res = await axios.post("http://localhost:3000/students", data);

    return data;
  }
);

export const deleteStudents = createAsyncThunk(
  "students/deleteStudents",
  async (data) => {
    const res = await axios.delete("http://localhost:3000/students/" + data);
    console.log(res);
    return data;
  }
);
export const editStudents = createAsyncThunk(
  "students/editStudents",
  async (data) => {
    console.log(4, data);
    await axios.put("http://localhost:3000/students/" + data.id, data);
    const res = await axios.get("http://localhost:3000/students");
    return res.data;
  }
);
export const findByIdStudents = createAsyncThunk(
    'students/findByIdStudents',
    async (data)=>{
        const res = await axios.get('students/findById/'+data);
        return res.data
    }
)
