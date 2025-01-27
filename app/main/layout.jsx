"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import icon from "../../public/ic_notarium_light_white.png";
import { FaBars, FaUserGraduate, FaGear, FaRightToBracket } from "react-icons/fa6";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export default function MainLayout({ children }) {
  const currentRoute = usePathname();
  const { dispatch } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      router.push("/signin");
    } catch (error) {
      console.log(error);
      // Toast.show({
      //   type: 'error',
      //   text1: 'Error',
      //   text2: `Código de error: \n${error}`
      // });
    }
  };

  return (
    <>
      <button datadrawertarget="logo-sidebar" datadrawertoggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-400 rounded-lg sm:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600">
        <span className="sr-only">Open sidebar</span>
        <FaBars className="w-6 h-6" aria-hidden="true" fill="currentColor" />
      </button>

      <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-52 h-dvh transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-800">
          <a href="/main/students" className="flex items-center ps-2.5 mb-5">
            <Image src={icon} width="30" height="30" className="mr-2" alt="Notarium Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Notarium</span>
          </a>
          <ul className="space-y-3 font-medium mt-2">
            <li>
              <a href="/main/students" className={`flex items-center p-2 ${currentRoute === '/main/students' ? 'text-white' : 'text-gray-400'} transition duration-100 hover:text-white rounded-lg hover:bg-gray-700 group`}>
                <FaUserGraduate className={`flex-shrink-0 w-5 h-5 ${currentRoute === '/main/students' ? 'text-white' : 'text-gray-400'} transition duration-100 group-hover:text-white`} aria-hidden="true" fill="currentColor" />
                <span className="flex-1 ms-3 whitespace-nowrap">Estudiantes</span>
              </a>
            </li>
            <li>
              <a href="/main/settings" className={`flex items-center p-2 ${currentRoute === '/main/settings' ? 'text-white' : 'text-gray-400'} transition duration-100 hover:text-white rounded-lg hover:bg-gray-700 group`}>
                <FaGear className={`flex-shrink-0 w-5 h-5 ${currentRoute === '/main/settings' ? 'text-white' : 'text-gray-400'} transition duration-100 group-hover:text-white`} aria-hidden="true" fill="currentColor" />
                <span className="flex-1 ms-3 whitespace-nowrap">Configuración</span>
              </a>
            </li>
          </ul>
          <ul className="pt-4 mt-auto space-y-2 font-medium border-t border-gray-700">
            <li>
              <a onClick={handleSignOut} className="flex items-center p-2 transition duration-500 text-white hover:text-[#e71b1b] rounded-lg bg-[#e71b1b] hover:bg-white group cursor-pointer">
                <FaRightToBracket className="flex-shrink-0 w-5 h-5 text-white transition duration-500 group-hover:text-[#e71b1b]" aria-hidden="true" fill="currentColor" />
                <span className="flex-1 text-center whitespace-nowrap">Cerrar Sesión</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="pt-5 sm:pl-52 sm:pt-16 sm:pb-12 h-dvh">
        {children}
      </div>
    </>
  );
}