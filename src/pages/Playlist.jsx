import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header2 from '../components/Header2'

import axios from 'axios';


const Playlist = () => {
  //variables globales a utilizar
  const BaseUrl = 'http://localhost:8080';
  const userToken = localStorage.getItem('token');
  const [playlist, setPlaylist] = useState(null);
 

  const config = {
      headers: {
          'Authorization': `Bearer ${userToken}`,
      }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);     // Guardando la informacion del formulario con formData
    const formBody = Object.fromEntries(formData.entries());

    if (formBody.title === "" || formBody.description === "") return toast('Llena todos los datos pa crear la playlist', { type: 'warning' });

    console.log(formBody);

    try {
        const response = await axios.post(`${BaseUrl}/playlist/`, formBody, config);
        
        if (response.status === 200){
          toast('Playlist creada', { type: 'success' });
          console.log(response.data);
        } 
    } catch (error) {
        const { response } = error;
        if (response.status === 400) toast('El formulario no esta correctamente escrito', { type: 'error' });
        
    }
};
//para poder mostrar la playlist
const onSubmitGetPlaylist = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);     // Guardando la informacion del formulario con formData
  const formBody = Object.fromEntries(formData.entries());

  //haciendo validacion para no obtener error de cors
  if (formBody.code === "") return toast('Llena todos los datos pa ver la playlist', { type: 'warning' });

  //obteniendo el codigo
  const playlistCode = e.target.elements.code.value;

  try {
    const response = await axios.get(`${BaseUrl}/playlist/${playlistCode}`, config);

    if (response.status === 200) {
      setPlaylist(response.data);
      console.log(response.data);
    }
  } catch (error) {
    const { response } = error;
    if (response.status === 401) {
      toast('No tienes autorización para ver esta playlist', { type: 'error' });
    } else if (response.status === 404) {
      toast('Playlist no encontrada', { type: 'error' });
    }
  }
};

//para agregar cancion a playlist
const onSubmitAddSongtoPlaylist = async(e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);     // Guardando la informacion del formulario con formData
  const formBody = Object.fromEntries(formData.entries());

  //validacion para que no se mande nada vacio
  if(formBody.songCode === '') return toast('Llena todos los datos pa agregar la canción a la playlist', { type: 'warning' });
  //obteniendo el codigo
  const playlistCode = e.target.elements.code.value;
  try{
    const response = await axios.post(`${BaseUrl}/playlist/${playlistCode}`,formBody ,config);

    if (response.status === 200) {
      setPlaylist(response.data);
      console.log(response.data);
      toast('Cancion agregada correctamente a la playlist', {type: 'success'});
    }

  }catch(error){
    const { response } = error;
    if (response.status === 401) {
      toast('No tienes autorización para agregar una cancion a esta playlist', { type: 'error' });
    } else if (response.status === 404) {
      toast('Playlist no encontrada', { type: 'error' });
    } else if (response.status === 400) {
      toast('LLena bien los campos', { type: 'error' });
    }else if(response.status === 409){
      toast('Esa canción ya existe en la playlist mi rey', {type: 'warning'});
    }
  }
}
//eso es para poder mostrar las canciones de la playlist con sus atributos
//se inicia en null porque sino da un error medio raro
let playlistSongs = null;
if (playlist && playlist.songs) {
  playlistSongs = playlist.songs.map(song => (
    <div key={song.code} className=' bg-white text-black'>
      <p className='text-gray-200 font-bold bg-primary '>Titulo:</p>
      <p className='text-black'>{song.title}</p>
      <p className='text-black font-bold '>Duración:</p>
      <p >{song.duration}</p>
      <p className=' font-bold '>Fecha agregada:</p>
      <p>{song.dateAdded}</p>
    </div>
  ));
}


  return (
    <>
      <section> <Header2/> </section>

      {/* Seccion del formulario para crear playlist */}
      <section className='grid grid-cols-2 md:grid md:grid-cols-3'>
        <div className='bg-otherbalck mt-5 mx-5'>
          <form className='px-8 pt-6 pb-8 mb-4' onSubmit={onSubmitHandler}>
            <label className='text-center block text-white font-bold mb-4 md:text-3xl' htmlFor="title">Crear una playlist</label>
            <label className='text-center block text-gray-200 font-bold mb-2 md:text-2xl' htmlFor="title">Ingresa el título</label>
            <input
              className=" placeholder:text-center shadow appearance-none border rounded w-full md:h-full md: py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Título de la playlist"
            />
            <label className='text-center block text-gray-200 font-bold mb-2 md:text-2xl' htmlFor="description">Ingresa una descripcion</label>

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
        {/* Formulario para obtener una playlist */}
        <div className='bg-otherbalck mt-5 mx-5'>
          <form className='px-8 pt-6 pb-8 mb-4' onSubmit={onSubmitGetPlaylist}>
            <label className='text-center block text-white font-bold mb-4 md:text-3xl' htmlFor="code">Obtener una playlist</label>
            <label className='text-center block text-gray-200 font-bold mb-2 md:text-2xl' htmlFor="code">Ingresa el codigo de la playlist</label>
            <input
              className=" placeholder:text-center shadow appearance-none border rounded w-full md:h-full md: py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="code"
              name="code"
              type="text"
              placeholder="Código de la playlist"
            />
            <div className="flex justify-center mt-5">
                <button
                  className="bg-primary border border-black-600 rounded-md px-4 py-2 md:text-2xl text-white"
                  type="submit"
                >
                  Obtener playlist 
                </button>
            </div>
          </form>

        </div>

        {/* Formulario para agregar una cancion */}
        <div className='bg-otherbalck mt-5 mx-5'>
          <form className='px-8 pt-6 pb-8 mb-4' onSubmit={onSubmitAddSongtoPlaylist}>
            <label className='text-center block text-white font-bold mb-4 md:text-3xl' htmlFor="">Añadir una canción a una playlist</label>
            <label className='text-center block text-white font-bold mb-4 md:text-2xl' htmlFor="">Ingresa el codigo de la playlist</label>
            <input
              className=" placeholder:text-center shadow appearance-none border rounded w-full md:h-full md: py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="code"
              name="code"
              type="text"
              placeholder="Código de la playlist"
            />
            <label className='text-center block text-white font-bold mb-4 md:text-2xl' htmlFor="">Ingresa el codigo de la canción a agregar</label>
            <input
              className=" placeholder:text-center shadow appearance-none border rounded w-full md:h-full md: py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="songCodeode"
              name="songCode"
              type="text"
              placeholder="Código de la canción"
            />
            <div className="flex justify-center mt-5">
                <button
                  className="bg-primary border border-black-600 rounded-md px-4 py-2 md:text-2xl text-white"
                  type="submit"
                >
                  Agregar canción
                </button>
            </div>
          </form>
        </div>
      </section>

      {/* Mostrar la informacion de la playlist */}
    
      {playlist && (
    <section className='mt-5 bg-otherbalck'>
      <h2 className='text-white font-bold text-center mb-4 md:text-3xl'>Información de la Playlist</h2>
      <div className='grid grid-cols-2 text-center'>
        <p className='text-gray-200 font-bold md:text-2xl'>Nombre:</p>
        <p className='text-gray-200 md:text-2xl'>{playlist.name}</p>
        <p className='text-gray-200 font-bold md:text-2xl'>Descripción:</p>
        <p className='text-gray-200 md:text-2xl'>{playlist.description}</p>
        <p className='text-gray-200 font-bold md:text-2xl'>Duración total:</p>
        <p className='text-gray-200 md:text-2xl'>{playlist.totalDuration}</p>
        <p className='text-gray-200 font-bold md:text-2xl'>Canciones:</p>
        {playlistSongs} {/* Renderizar las canciones */}
      </div>
    </section>
  )}

      <ToastContainer/>
    </>
  )
}

export default Playlist