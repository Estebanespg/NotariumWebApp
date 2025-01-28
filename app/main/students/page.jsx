"use client";

import StudentCard from "@/components/StudentCard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from "@/firebase";

export default function Students() {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return null;

  const [student, setStudent] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentList = [];
      const q = query(collection(db, "students"), where("uid", "==", currentUser.uid));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          studentList.push({ id: doc.id, ...doc.data() });
        });
        // console.log(JSON.stringify(studentList));
        setStudent(studentList);
      } catch (error) {
        console.log(error);
        // Toast.show({
        //   type: 'error',
        //   text1: 'Error',
        //   text2: `Código de error: \n${error.code}`
        // });
      }
    }
    fetchStudents();
  }, [currentUser]);

  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex flex-col items-center mb-2">
        <p className="text-2xl font-semibold">Estudiantes del usuario:</p>
        <p className="text-lg font-normal">{currentUser.email || null}</p>
      </div>
      {
        student.length > 0 ? (
          student.map((studentData) => (
            <StudentCard key={studentData.id} data={studentData} />
          ))
        ) : (
          <div className="flex flex-col mt-12 justify-center">
            <p className="text-lg font-normal">Aún no hay estudiantes registrados...</p>
          </div>
        )
      }
    </div>
  );
}