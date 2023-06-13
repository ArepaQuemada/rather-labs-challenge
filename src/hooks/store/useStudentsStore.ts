import { useSelector, useDispatch } from "react-redux";
import { addStudent, setStudents } from "@src/slices/students-slice";
import { RootState } from "@src/store/store";
import { Student } from "@src/models";

export const useStudentsStore = () => {
  const students = useSelector(
    (state: RootState) => state.studentsReducer.students
  );
  const dispatch = useDispatch();

  const addStudentToStore = (course: Student) => {
    dispatch(addStudent(course));
  };

  const setStudentsToStore = (courses: Student[]) => {
    dispatch(setStudents(courses));
  };

  return {
    students,
    addStudent: addStudentToStore,
    setStudent: setStudentsToStore,
  };
};
