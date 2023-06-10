import { useStudentsStore } from "./store/useStudentsStore";
import StudentList from "@src/components/student-list/student-list";

export const useStudentsPageContent = () => {
  const { students } = useStudentsStore();
  if (students.length === 0) {
    return <div>No students found</div>;
  }
  return (
    <>
      <StudentList students={students} />
    </>
  );
};
