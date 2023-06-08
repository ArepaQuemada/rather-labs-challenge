import { Course } from "@src/models";

export type FormState = Omit<Course, "students" | "id">;

export interface CreateCourseProps {
  handleSubmit: (formState: FormState) => void;
}
