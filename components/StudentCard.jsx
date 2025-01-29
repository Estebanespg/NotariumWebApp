import Link from "next/link";
import { FaTrashCan } from "react-icons/fa6";

export default function StudentCard({data}) {
  return (
    <Link href="/main/students/student" className="flex flex-row mt-5 bg-slate-800 hover:bg-slate-700 px-6 rounded-lg w-80 sm:w-96 min-h-20 justify-between items-center cursor-pointer">
      <div>
        <p className="color-white font-normal text-lg">{data.student}</p>
        <p className="color-slate-400 font-light text-base">{Object.keys(data.subjects).length} {Object.keys(data.subjects).length === 1 ? 'Asignatura' : 'Asignaturas'}</p>
      </div>
      <button><FaTrashCan className="w-5 h-5 text-[#e71b1b]" /></button>
    </Link>
  );
}