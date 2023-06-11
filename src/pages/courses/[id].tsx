import { Course } from "@src/models";
import Image from "next/image";

export default function CourseDetails({
  category,
  description,
  name,
  imageUrl,
  students,
}: Course) {
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{category}</p>
      <Image alt={`${name}-image`} src={imageUrl} />
      <p>Students enrolled</p>
      {students.map((student) => (
        <p key={student.id}>{student.name}</p>
      ))}
    </>
  );
}
