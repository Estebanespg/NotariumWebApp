"use client";

import StudentCard from "@/components/StudentCard";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function Students() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-2">
        <p className="text-2xl font-semibold">Estudiantes del usuario:</p>
        <p className="">{currentUser.email || null}</p>
      </div>
      <StudentCard />
    </div>
  );
}