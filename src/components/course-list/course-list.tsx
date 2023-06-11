import { CoursesListProps } from "@src/interfaces/courses-list.interface";
import Card from "../card/Card";

export const CoursesList = ({ courses }: CoursesListProps) => {
  return (
    <>
      {courses.map((course) => (
        <Card
          id={course.id}
          key={course.id}
          title={course.name}
          description={course.description}
          imageUrl={course.imageUrl}
        />
      ))}
    </>
  );
};
