import { Student } from "@src/models";

export type FormState = Omit<Student, "courses" | "id">;

export interface CreateStudentFormProps {
  handleSubmit: (formState: FormState) => void;
}
