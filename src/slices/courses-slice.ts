import { createSlice } from "@reduxjs/toolkit";
import { Course } from "@src/models";

type CoursesState = {
  courses: Course[];
};

const initialState: CoursesState = {
  courses: [],
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

export const { addCourse, setCourses } = coursesSlice.actions;

export default coursesSlice.reducer;
