import { StudentsListProps } from "@src/interfaces/students-list.interface";
import { User } from "react-feather";
const StudentList = ({ students }: StudentsListProps) => {
  return (
    <>
      {students.map((student) => (
        <div
          key={student.id}
          className="w-full grid grid-cols-1 gap-8 md:grid-cols-6 md:grid-rows-2 md:gap-4 bg-base-300 p-4 rounded-md mb-8 text-center md:text-left"
        >
          <div className="md:col-span-2 row-span-2 flex justify-center md:block">
            <User width={40} height={25} />
            <h2 className="text-lg">{student.name}</h2>
          </div>
          <div className="row-span-2">
            <p>Email: </p>
            <p>{student.email}</p>
          </div>
          <div className="row-span-2">
            <p>Phone: </p>
            <p>{student.phone}</p>
          </div>
          <div className="row-span-2">
            <p>Birthdate: </p>
            <p>{student.birthdate}</p>
          </div>
          <div className="collapse col-span-6  collapse-arrow border">
            <div className="collapse-title ">Courses</div>
            <input type="checkbox" />
            <div className="collapse-content">
              <ul className="list-none">
                {student.courses.map((course) => (
                  <li key={course.id}>{course.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default StudentList;
