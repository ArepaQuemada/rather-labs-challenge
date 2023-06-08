import { Student } from "./student.model";

type Categories = "math" | "english" | "programming" | "english" | "science";

export interface Course {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: Categories;
  students: Student[];
}
