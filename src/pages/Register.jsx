import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/icon1.png'

const Register = () => {
    return (
        <>
        <div className="flex flex-col items-center">
            <div className="flex justify-center font-sans">
                <form className=" px-8 pt-6 pb-8 mb-4  font-sans ">
                <Link to='/'>
                    <div className='flex justify-center mb-4'>
                        <img class='w-1/2 h-1/2 shadow-md rounded md:w-2/6 ' src={logo1}/>
                    </div>
                </Link>
        <div className="mb-4">
            <label className="text-center block text-gray-700 font-bold mb-2 md:text-3xl" htmlFor="username">
                Regístrate!
          </label>
        </div>

        <div className="mb-4 md:mb-16 md:h-16">
            <label className="text-center block text-gray-700 font-bold mb-2 md:text-3xl" htmlFor="username">
                Ingresa tu usuario
            </label>
            <input
                className="shadow appearance-none border rounded w-full md:h-full md: py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Nombre de usuario"
            />
        </div>

        <div className="mb-4 md:mb-16 md:h-16">
            <label className="text-center block text-gray-700 font-bold mb-2 md:text-3xl" htmlFor="email">
                Ingresa tu correo
            </label>
            <input
                className="shadow appearance-none border rounded w-full md:h-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Correo electrónico"
            />
        </div>

        <div className="mb-6 md:mb-16 md:h-16">
            <label className="text-center block text-gray-700 font-bold mb-2 md:text-3xl" htmlFor="password">
                Ingresa tu contraseña
            </label>
            <input
                className="shadow appearance-none border rounded w-full md:h-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="**********"
            />
        </div>
        <div className="flex justify-center mb-4 md:mb-2">
          <button
            className="bg-primary text-white border border-black-600 rounded-md px-4 py-2 md:text-2xl"
            type="button"
            >
            Registrarse
          </button>
        </div>
      </form>
    </div>
    <div className='md:flex md:flex-row md:space-x-4'>
    <p className="text-center md:text-2xl">Ya tienes cuenta?, </p>
    <Link to='/login' className="text-blue-600 md:text-2xl"> Inicia sesión</Link>
    </div>
    <hr className="border-gray-400 my-4 w-full "/>
    <p className="text-center md:text-2xl">También puedes con:</p>
      
      
      
    </div>
        </>
    )
}

export default Register