import { useStudentsPageContent } from "@src/hooks/useStudentsPageContent";

export default function Students() {
  const content = useStudentsPageContent();
  return (
    <div>
      <h1>Students</h1>
      {content}
    </div>
  );
}
