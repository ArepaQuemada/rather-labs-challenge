import {
  FormState,
  CreateStudentFormProps,
} from "@src/interfaces/students-form.interface";
import { ChangeEvent, FormEvent, useState } from "react";

const StudentsForm = ({ handleSubmit }: CreateStudentFormProps) => {
  const [formState, setFormState] = useState<FormState>({
    birthdate: "",
    email: "",
    name: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formState.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        value={formState.email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="text"
        value={formState.phone}
        onChange={handleChange}
      />
      <label htmlFor="date">Phone</label>
      <input
        id="date"
        name="date"
        type="date"
        value={formState.birthdate}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default StudentsForm;
