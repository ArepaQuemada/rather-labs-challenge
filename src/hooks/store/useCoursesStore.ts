import { useSelector, useDispatch } from "react-redux";
import { addCourse, setCourses } from "@src/slices/courses-slice";
import { RootState } from "@src/store/store";
import { Course } from "@src/models";

export const useCoursesStore = () => {
  const courses = useSelector(
    (state: RootState) => state.coursesReducer.courses
  );
  const dispatch = useDispatch();

  const addCourseToStore = (course: Course) => {
    dispatch(addCourse(course));
  };

  const setCoursesToStore = (courses: Course[]) => {
    dispatch(setCourses(courses));
  };

  return {
    courses,
    addCourse: addCourseToStore,
    setCourses: setCoursesToStore,
  };
};
