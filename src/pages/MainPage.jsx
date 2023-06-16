import React from 'react'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {TbPlaylist} from 'react-icons/tb'
import {RiUserSmileLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

import Header2 from '../components/Header2'

const MainPage = () => {
    return (
        <>
        <section>
            <Header2/>
        </section>

        <section className='grid grid-cols-3 mt-20'>
            <Link to='/song'>
                <div className='flex flex-col items-center justify-center'>
                    <BsMusicNoteBeamed className='h-24 w-24'/>
                    <span className='text-4xl text-center'> Song</span>
                </div>
            </Link>
            <Link to='/playlist'>
                <div className='flex flex-col items-center justify-center'>
                    <TbPlaylist className='h-24 w-24'/>
                    <span className='text-4xl text-center'> Playlist</span>
                </div>
            </Link>
            <Link to='/user'>
                <div className='flex flex-col items-center justify-center'>
                    <RiUserSmileLine className='h-24 w-24'/>
                    <span className='text-4xl text-center'> Users</span>
                </div>
            </Link>
        </section>
        </>
    )
}

export default MainPage