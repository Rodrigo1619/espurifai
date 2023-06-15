import React from 'react'
import Header from '../components/Header'
import camaron1 from '../assets/shrimp1.png'
import camaron2 from '../assets/shrimp2.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section>
                <Header/>
            </section>

            {/* Seccion para los camarones */}
            
            <section className=' py-14'>
                <div className='flex justify-evenly w-full'>
                    <img className='rounded-3xl w-2/5 sm:w-1/2 min-h-[250px] sm:min-h-[350px] object-cover md:h-auto' src={camaron1} alt="friendsgroup"/>

                    <div className='w-1/2 flex flex-col justify-center sm:w-2/5'>
                        <h2 className='text-center text-white text-sm mb-5 sm:text-xl lg:text-3xl xl:text-[2.5rem] xl:leading-[2.825rem]'>
                            ¡El mejor creador de playlists a un click!
                        </h2>
                        <p className='text-gray-300 text-xs px-3 sm:text-base sm:px-5 lg:text-2xl xl:text-4xl lg:px-11'>En Espurifai podras crear las mejores playlist para tus canciones</p>
                    </div>
                </div>
            </section>
            
            {/* Camaron 2 */}
            <section className='flex justify-evenly w-full  bg-main py-14 '>
                <div className='w-1/2 flex flex-col justify-center sm:w-2/5'>
                    <p className='text-center text-white text-sm mb-5 sm:text-xl lg:text-3xl xl:text-[2.5rem] xl:leading-[2.825rem]'>¿Acompañado?, ¿Solo? ¡No hay problema!</p>
                    <p className='text-gray-300 text-xs px-3 sm:text-base sm:px-5 lg:text-2xl xl:text-4xl lg:px-11'>Puedes crear las playlist de todos modos y agregar las canciones de tu género preferido</p>
                </div>

                <img className='rounded-3xl w-2/5 min-h-[250px] object-cover sm:w-[45%] md:h-auto' src={camaron2} alt="festival people" />
            </section>

            {/* Registro */}
            <section className='flex flex-col items-center w-full py-24 bg-primary '>
                <p className='text-center text-black  text-xs sm:text-xl sm:px-5'>¿Aun no tienes cuenta? <br/>¡Eso es un problema, pero nosotros te ayudamos!</p>
                <Link to = '/register' className='bg-secondary hover:bg-secondaryHover text-white w-4/5 sm:w-2/5 p-3 text-xs sm:text-xl my-5 rounded-full text-center '> Regístrate </Link>
            </section>

        </>
    )
}

export default Home