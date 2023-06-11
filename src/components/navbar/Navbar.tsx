import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-base-300 md:col-span-2 md:h-screen">
      <div className="mb-6">
        <span className="btn btn-ghost normal-case text-3xl italic">
          Mockup School Management
        </span>
      </div>
      <div className="dropdown md:dropdown-open md:w-full">
        <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul className="menu menu-vertical px-1 dropdown-content md:visible w-64 md:w-full bg-base-300">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Courses</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/courses/create-course">Create Course</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Students</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link href="/students/create-student">Create Student</Link>
                </li>
                <li>
                  <Link href="/students/create-student">All students</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
