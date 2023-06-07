export default function CreateStudent() {
  return (
    <main>
      <h1>Create Student</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" />
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="text" />
        {/**
         * TODO: Definir elementos para cursos y campo fecha de nacimiento
         */}
        <button type="submit">Create</button>
      </form>
    </main>
  );
}
