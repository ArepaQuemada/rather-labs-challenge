import { FetchController } from "@src/controllers/Fetch.controller";
import { useCoursesStore } from "@src/hooks/store/useCoursesStore";
import { useMainPageCoursesContent } from "@src/hooks/useMainPageCoursesContent";
import { Course } from "@src/models";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps<{
  courses: Course[];
}> = async () => {
  const fetchController = new FetchController();
  const res = await fetchController.get<{ courses: Course[] }>(
    "http://localhost:3000/__mocks__/courses.json"
  );
  return {
    props: {
      courses: res?.courses ?? [],
    },
  };
};

export default function Home({ courses }: { courses: Course[] }) {
  const { setCourses } = useCoursesStore();
  const content = useMainPageCoursesContent();

  useEffect(() => {
    setCourses(courses);
  }, [courses, setCourses]);
  return (
    <>
      <h1 className="text-3xl text-center mb-20">Courses</h1>
      <section className="grid md:grid-cols-3 gap-3 justify-center">
        {/*
          TODO: Show all courses (add some sort of pagination / filters by category would be nice too)
          Click on course would nagitate to specific details page
          Add navbar and menu to access forms to create
        */}
        {content}
      </section>
    </>
  );
}
