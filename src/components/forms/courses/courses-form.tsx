import { ChangeEvent, FormEvent, useState } from "react";
import { courseCategories } from "@src/constants/course-categories";
import { Course } from "@src/models";
import {
  CreateCourseProps,
  FormState,
} from "@src/interfaces/courses-form.interface";

const defaultSelectedCategory = courseCategories.at(0) as FormState["category"];

const CoursesForm = ({ handleSubmit }: CreateCourseProps) => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    description: "",
    category: defaultSelectedCategory,
    imageUrl: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const category = e.target.value as Course["category"];
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: category,
    }));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(formState);
  };

  return (
    <>
      <h1>Create Course</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" onChange={handleChange} />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          onChange={handleChange}
          value={courseCategories.at(0)}
        >
          {courseCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label htmlFor="imageUrl">Image Url</label>
        <input
          type="file"
          alt="Submit"
          onChange={handleChange}
          accept=".jpg, .jpeg, .png"
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default CoursesForm;
