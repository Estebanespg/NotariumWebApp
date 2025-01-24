"use client";

import StudentCard from "@/components/StudentCard";
import { useAuth } from "@/context/AuthContext";

export default function Students() {
  const { user } = useAuth();
  console.log(user);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-2">
        <p className="text-2xl font-semibold">Estudiantes del usuario:</p>
        <p className="">a</p>
      </div>
      <StudentCard />
    </div>
  );
}