import { useMainPageCoursesContent } from "@src/hooks/useMainPageCoursesContent";

export default function Home() {
  const content = useMainPageCoursesContent();
  return (
    <>
      <h1>Home Page</h1>
      <section>
        <h2>Courses</h2>
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
