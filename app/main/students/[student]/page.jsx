"use client";

import { useRouter } from 'next/navigation'

export default function Student() {
  const router = useRouter();

  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex flex-col items-center mb-2">
        <p className="text-2xl font-semibold">Estudiante</p>
        <p>Post: {router.query.slug}</p>
      </div>
    </div>
  );
}