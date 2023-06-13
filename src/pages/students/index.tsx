import { FetchController } from "@src/controllers/Fetch.controller";
import { useStudentsStore } from "@src/hooks/store/useStudentsStore";
import { useStudentsPageContent } from "@src/hooks/useStudentsPageContent";
import { Student } from "@src/models";
import { GetServerSideProps } from "next";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps<{
  students: Student[];
}> = async () => {
  const fetchController = new FetchController();
  const res = await fetchController.get<{ students: Student[] }>(
    "http://localhost:3000/__mocks__/students.json"
  );
  return {
    props: {
      students: res?.students ?? [],
    },
  };
};

export default function Students({ students }: { students: Student[] }) {
  const { setStudent } = useStudentsStore();
  const content = useStudentsPageContent();

  useEffect(() => {
    setStudent(students);
  }, [setStudent, students]);

  return (
    <div>
      <h1 className="text-3xl text-center mb-20">Students</h1>
      {content}
    </div>
  );
}
