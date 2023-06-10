import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/courses/create-course">Create Course</Link>
        </li>
        <li>
          <Link href="/students/create-student">Create Student</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
