import { Course } from "@src/models";
import Image from "next/image";

export default function CourseDetails({
  category,
  description,
  name,
  rating,
  imageUrl,
  students,
}: Course) {
  return (
    <main>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <Image alt={`${name}-image`} src={imageUrl} />
      <p>{rating}</p>
      <p>Students enrolled</p>
      {students.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
    </main>
  );
}
