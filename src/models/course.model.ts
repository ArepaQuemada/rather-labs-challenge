import { Student } from "./student.model";

type Categories = "math" | "english" | "programming" | "english" | "science";

export interface Course {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  students: Student[];
  category: Categories;
}
