import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Header2 from '../components/Header2'

const Song = () => {
  const [songs, setSongs] = useState([]);
  const BaseUrl = 'http://localhost:8080';
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchSongs = async () => {

      try {
        const token = localStorage.getItem('token'); // obtener el token del localStorage
        const config = {
          headers: {
              "Authorization": `Bearer ${token}`
          },
          params: {
            page: currentPage,
            size: 4
          }
        };
        const response = await axios.get(`${BaseUrl}/song/all`, config);
        if (response.data && response.data.content) {
          setSongs(response.data.content);
          setTotalPages(response.data.total_pages);
        } else {
          console.error('La respuesta no contiene canciones válidas:', response.data);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };

    fetchSongs();
  }, [currentPage]);

  const goToPage = (page) => {
    if (page >= 0) {
      setCurrentPage(page);
    }
  };

  return(
    <>
      <section>
        <Header2 />
      </section>

      <section className='flex flex-col items-center py-20 px-20'>
        <div className='bg-otherbalck text-white '>
          {songs.map((song) => (
            <ol key={song.code}>
              <strong>Código:</strong> {song.code}
              <br  />
              <strong>Título:</strong> {song.title}
              <br />
              <strong>Duración:</strong> {song.duration}
              <hr/>
            </ol>
          ))}
        </div>

        {/* Paginación */}
        <div className='space-x-2 py-3'>
          {Array.from({ length: totalPages }, (_, index) => index ).map((page) => (
            <button key={page} onClick={() => goToPage(page)} className='bg-secondary px-4 rounded-xl space-x-2'>
              {page}
            </button>
          ))}
        </div>
      </section>
    </>
  )
}

export default Song