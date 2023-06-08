import { useSelector, useDispatch } from "react-redux";
import { addCourse, setCourses } from "@src/slices/courses-slice";
import { RootState } from "@src/store/store";
import { Student } from "@src/models";

export const useStudentsStore = () => {
  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );
  const dispatch = useDispatch();

  const addStudentToStore = (course: Student) => {
    dispatch(addCourse(course));
  };

  const setStudentsToStore = (courses: Student[]) => {
    dispatch(setCourses(courses));
  };

  return {
    courses,
    addStudent: addStudentToStore,
    setStudent: setStudentsToStore,
  };
};
