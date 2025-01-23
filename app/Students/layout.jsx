import Image from "next/image";
import icon from "../../public/ic_notarium_light_white.png";
import { FaBars, FaUserGraduate, FaGear, FaRightToBracket } from "react-icons/fa6";

export default function StudentsLayout({ children }) {
  return (
    <>
      <button datadrawertarget="logo-sidebar" datadrawertoggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <FaBars className="w-6 h-6" aria-hidden="true" fill="currentColor" />
      </button>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="/Students" className="flex items-center ps-2.5 mb-5">
            <Image src={icon} width="30" height="30" className="mr-2" alt="Notarium Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Notarium</span>
          </a>
          <ul className="space-y-3 font-medium mt-2">
            <li>
              <a href="/Students" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaUserGraduate className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" />
                <span className="flex-1 ms-3 whitespace-nowrap">Estudiantes</span>
              </a>
            </li>
            <li>
              <a href="/Settings" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaGear className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" />
                <span className="flex-1 ms-3 whitespace-nowrap">Configuración</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-auto space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a href="/SignIn" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FaRightToBracket className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" fill="currentColor" />
                <span className="flex-1 ms-3 whitespace-nowrap">Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:ml-52">
        <div className="w-full h-dvh flex flex-col justify-center items-center">
          <div className="w-[350px] md:w-[400px] flex flex-col items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}