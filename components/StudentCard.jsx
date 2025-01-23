import { FaTrashCan } from "react-icons/fa6";

export default function StudentCard() {
  return (
    <a className="flex flex-row mt-5 bg-slate-800 hover:bg-slate-700 px-6 rounded-lg w-96 h-20 justify-between items-center cursor-pointer">
      <div>
        <p className="color-white font-semibold text-lg">Student</p>
        <p className="color-slate-400 font-light text-base"># Asignaturas</p>
      </div>
      <button><FaTrashCan className="w-5 h-5 text-[#e71b1b]" /></button>
    </a>
  );
}