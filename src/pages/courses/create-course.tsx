import CoursesForm from "@src/components/forms/courses/courses-form";
import { useCoursesStore } from "@src/hooks/store/useCoursesStore";
import { FormState } from "@src/interfaces/courses-form.interface";

export default function CreateCourse() {
  const { addCourse } = useCoursesStore();

  const handleSubmit = (formState: FormState) => {
    addCourse({ ...formState, id: Date.now().toString(), students: [] });
  };

  return (
    <main>
      <CoursesForm handleSubmit={handleSubmit} />
    </main>
  );
}
