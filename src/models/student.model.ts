import { Course } from "./course.model";

export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  courses: Course["id"][];
  birthdate: string;
}
