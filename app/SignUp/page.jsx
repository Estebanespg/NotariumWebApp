"use client";

import Image from "next/image";
import icon from "../../public/ic_notarium_light_white.png";
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { FaAt, FaLock } from "react-icons/fa6";
import Link from "next/link";

export default function SignUp() {
  // VALIDATION
  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .email('Correo Inválido')
      .required('Por favor ingresa un correo!')
      .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "El formato del correo electrónico es inválido"),
    password: Yup.string()
      .min(8, 'Muy corta!')
      .required('Por favor ingresa una contraseña!')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un símbolo especial."),
  });

  return (
    <div className="w-screen h-dvh flex flex-col justify-center items-center">
      <div className="w-[350px] md:w-[400px] flex flex-col items-center">
        {/* IMAGE */}
        <Image src={icon} width="100" height="100" alt="Notarium Logo" />

        {/* TITLE */}
        <p className="text-3xl font-semibold mt-8 mb-12">Registrarse</p>

        {/* FORM */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignUpSchema}
        // onSubmit={handleSignIn}
        >
          {({ handleChange, handleBlur, handleSubmit, isValid, values }) => (
            <>
              {/* EMAIL INPUT */}
              <div className="flex items-center h-12 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
                <FaAt className="text-xl mr-2" />
                <input
                  className="w-full placeholder:text-slate-600 text-white h-full bg-transparent border-none focus:outline-none text-lg"
                  placeholder="Correo"
                  onChange={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </div>
              <div className="flex justify-start w-full mb-6">
                <ErrorMessage name="email">
                  {msg =>
                    <p className="justify-start text-red-700 font-semibold text-md">
                      {msg}
                    </p>
                  }
                </ErrorMessage>
              </div>

              {/* PASSWORD INPUT */}
              <div className="flex items-center h-12 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
                <FaLock className="text-xl mr-2" />
                <input
                  className="flex-1 placeholder:text-slate-600 text-white h-full bg-transparent border-none focus:outline-none text-lg"
                  placeholder="Contraseña"
                  onChange={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </div>
              <div className="flex justify-start w-full mb-8">
                <ErrorMessage name="password">
                  {msg =>
                    <p className="justify-start text-red-700 font-semibold text-md">
                      {msg}
                    </p>
                  }
                </ErrorMessage>
              </div>

              {/* BUTTON */}
              <button
                disabled={!isValid}
                className={`w-full h-14 ${isValid ? 'bg-[#6440a5] hover:bg-[#7d56c7]' : 'bg-[#8067ad] cursor-not-allowed'} font-medium border-none rounded-lg items-center justify-center mb-5`}
                onClick={handleSubmit}
              >
                <p className="color-white text-lg">Registrarse</p>
              </button>
            </>
          )}
        </Formik>

        {/* TEXT */}
        <p className="text-white mb-10">
          Ya tienes una cuenta?
          <Link href="/signin">
            <span className="text-[#1E90FF] font-bold"> Inicia Sesión</span>
          </Link>
        </p>

        {/* TEXT */}
        <p className="absolute bottom-2.5 left-0 right-0 text-center text-white tracking-wide font-medium">Notarium</p>
      </div>
    </div>
  );
}