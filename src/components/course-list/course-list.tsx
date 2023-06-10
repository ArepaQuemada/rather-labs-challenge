import { CoursesListProps } from "@src/interfaces/courses-list.interface";

export const CoursesList = ({ courses }: CoursesListProps) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
        </div>
      ))}
    </>
  );
};
