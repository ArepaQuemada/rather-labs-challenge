import StudentsForm from "@src/components/forms/students/students-form";
import { useStudentsStore } from "@src/hooks/store/useStudentsStore";
import { FormState } from "@src/interfaces/students-form.interface";

export default function CreateStudent() {
  const { addStudent } = useStudentsStore();

  const handleSubmit = (formState: FormState) => {
    addStudent({
      ...formState,
      id: Date.now().toString(),
      courses: [],
    });
  };
  return (
    <>
      <h1>Create Student</h1>
      <StudentsForm handleSubmit={handleSubmit} />
    </>
  );
}
