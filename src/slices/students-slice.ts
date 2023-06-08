import { createSlice } from "@reduxjs/toolkit";
import { Student } from "@src/models/student.model";

type StudentsSlice = {
  students: Student[];
};

const initialState: StudentsSlice = {
  students: [],
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
  },
});

export const { addStudent, setStudents } = studentsSlice.actions;

export default studentsSlice.reducer;
