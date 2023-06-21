import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header2 from '../components/Header2'

import axios from 'axios';


const Playlist = () => {
  const BaseUrl = 'http://localhost:8080';
  const userToken = localStorage.getItem('token');
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const config = {
        headers: {
            'Authorization': `Bearer ${userToken}`,
        }
    };
    // Guardando la informacion del formulario con formData
    const formData = new FormData(e.target);
    const formBody = Object.fromEntries(formData.entries());

    if (formBody.title === "" || formBody.description === "") return toast('Llena todos los datos pa crear la playlist', { type: 'warning' });

    console.log(formBody);

    try {
        const response = await axios.post(`${BaseUrl}/playlist/`, formBody, config);
        
        if (response.status === 200) toast('Playlist creada', { type: 'success' });
    } catch (error) {
        const { response } = error;
        if (response.status === 400) toast('El formulario no esta correctamente escrito', { type: 'error' });
        
    }
};


  return (
    <>
      <section> <Header2/> </section>

      {/* Seccion del formulario para crear playlist */}
      <section className='grid grid-cols-2'>
        <div className=''>
          <form className='px-8 pt-6 pb-8 mb-4' onSubmit={onSubmitHandler}>
            <label className='text-center block text-gray-700 font-bold mb-4 md:text-3xl' htmlFor="title">Crear una playlist</label>
            <label className='text-center block text-gray-700 font-bold mb-2 md:text-2xl' htmlFor="title">Ingresa el título</label>
            <input
              className=" placeholder:text-center shadow appearance-none border rounded w-full md:h-full md: py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Título de la playlist"
              
            />
            <label className='text-center block text-gray-700 font-bold mb-2 md:text-2xl' htmlFor="description">Ingresa una descripcion</label>

            <input
              className=" placeholder:text-center shadow appearance-none border rounded w-full md:h-full md: py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              type="text"
              placeholder="Descripción de playlist"
              
            />
          <div className="flex justify-center mt-5">
                      <button
                        className="bg-primary border border-black-600 rounded-md px-4 py-2 md:text-2xl text-white"
                        type="submit"
                      >
                        Crear playlist 
                      </button>
          </div>
          </form>
        </div>
      </section>
      <ToastContainer/>
    </>
  )
}

export default Playlist