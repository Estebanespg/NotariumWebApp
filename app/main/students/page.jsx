"use client";

import StudentCard from "@/components/StudentCard";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

export default function Students() {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/signin");
    }
  }, [currentUser, router]);

  if (!currentUser) return null;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mb-2">
        <p className="text-2xl font-semibold">Estudiantes del usuario:</p>
        <p className="">{currentUser.email}</p>
      </div>
      <StudentCard />
    </div>
  );
}