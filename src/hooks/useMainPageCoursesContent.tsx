import { CoursesList } from "@src/components/course-list/course-list";
import { useCoursesStore } from "./store/useCoursesStore";

export const useMainPageCoursesContent = () => {
  const { courses } = useCoursesStore();
  if (courses.length === 0) {
    return <div>No courses found</div>;
  }
  return (
    <>
      <div className="grid grid-cols-4">
        <CoursesList courses={courses} />
      </div>
    </>
  );
};
