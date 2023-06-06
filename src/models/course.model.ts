import { Student } from "./student.model";

export interface Course {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  students: Student[];
}
