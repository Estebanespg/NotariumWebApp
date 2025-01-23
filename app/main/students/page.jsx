import StudentCard from "@/components/StudentCard";

export default function Students() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-2">
        <p className="text-2xl font-semibold">Estudiantes del usuario:</p>
        <p className="">email@email.com</p>
      </div>
      <StudentCard />
    </div>
  );
}