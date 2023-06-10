import { StudentsListProps } from "@src/interfaces/students-list.interface";

const StudentList = ({ students }: StudentsListProps) => {
  return (
    <>
      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.email}</p>
          <p>{student.phone}</p>
        </div>
      ))}
    </>
  );
};

export default StudentList;
