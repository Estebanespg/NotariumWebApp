"use client";

import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Main() {
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/signin");
    } else {
      router.push("/main/students");
    }
  }, [currentUser, router]);

  return (
    <div className="w-screen h-dvh flex flex-col justify-center items-center">
      <div className="w-[350px] md:w-[400px] flex flex-col items-center">
        {/* TITLE */}
        <p className="text-xl font-semibold">Cargando...</p>
      </div>
    </div>
  );
}