import { Course } from "./course.model";

export interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
  courses: Course[];
  birthdate: Date;
}
