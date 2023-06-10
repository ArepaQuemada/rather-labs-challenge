import { CoursesList } from "@src/components/course-list/course-list";
import { useCoursesStore } from "./useCoursesStore";

export const useMainPageCoursesContent = () => {
  const { courses } = useCoursesStore();
  if (courses.length === 0) {
    return <div>No courses found</div>;
  }
  return (
    <>
      <CoursesList courses={courses} />
    </>
  );
};
