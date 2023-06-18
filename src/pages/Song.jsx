import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Header2 from '../components/Header2'

const Song = () => {
  const [songs, setSongs] = useState([]);
  const BaseUrl = 'http://localhost:8080';

  useEffect(() => {
    const fetchSongs = async () => {

      try {
        const token = localStorage.getItem('token'); // obtener el token del localStorage
        const config = {
          headers: {
              "Authorization": `Bearer ${token}`
          }
        };
        const response = await axios.get(`${BaseUrl}/song/all`, config);
        setSongs(response.data); // actualizar el estado con las canciones obtenidas
        } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchSongs();
  }, []);

  return(
    <>
      <section> <Header2/> </section>

      {/* Seccion para ver todas las canciones */}
      <section className='flex flex-col items-center'>
        <div className='bg-white'>
          {songs.map((song) => (
            <li key={song.code}>
              <strong>Código:</strong> {song.code}
              <br />
              <strong>Título:</strong> {song.title}
              <br />
              <strong>Duración:</strong> {song.duration}
            </li>
          ))}
        </div>
      </section>
    </>
  )
}

export default Song