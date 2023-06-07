export default function CreateCourse() {
  return (
    <main>
      <h1>Create Course</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="description">Description</label>
        <input id="description" name="description" type="text" />
        <label htmlFor="category">Category</label>
        <input id="category" name="category" type="text" />
        <label htmlFor="rating">Rating</label>
        <input id="rating" name="rating" type="number" />
        <label htmlFor="imageUrl">Image Url</label>
        <input id="imageUrl" name="imageUrl" type="text" />
        <button type="submit">Create</button>
      </form>
    </main>
  );
}
