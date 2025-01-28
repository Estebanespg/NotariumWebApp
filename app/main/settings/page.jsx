import { FaFilePdf } from "react-icons/fa6";

export default function Settings() {
  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold">Configuración</p>
      </div>
      <div className="flex flex-col h-full justify-center gap-10">
        <div className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium">¿Desea generar un reporte académico?</p>
          <button className="w-72 h-12 bg-[#6440a5] hover:bg-[#7d56c7] font-normal border-none rounded-lg flex items-center justify-center mb-5">
            <FaFilePdf />
            <p className="color-white ml-2 ">Descargar</p>
          </button>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-lg font-medium">¿Desea eliminar su cuenta?</p>
          <button className="w-72 h-12 bg-[#e71b1b] hover:bg-[#f93a3a] font-normal border-none rounded-lg flex items-center justify-center mb-5">
            <p className="color-white ml-2 ">Eliminar Cuenta</p>
          </button>
        </div>
      </div>
    </div>
  );
}