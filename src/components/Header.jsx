import React from 'react'
import { Link } from 'react-router-dom';

import icon1 from '../assets/icon1.png'
import userIcon from '../assets/UserIcon.svg'

const Header = () => {
    return (
        <nav className='flex flex-row'>
                <div className='flex flex-row justify-self-center w-full px-4 bg-otherbalck'>
                    <Link className='mx-auto' to= '/'>
                        <img src={icon1} alt="logo toptrend" className='w-[140px] h-[160px] lg:mr-20' />
                    </Link>
                    <div className='flex flex-row items-center justify-end'>
                        <Link to="/login" className='bg-secondary rounded-2xl py-4 px-6 hover:bg-green-400'><span className='text-white'>Inicia sesión</span> </Link>
                        <img src={userIcon} alt="user icon" className='hidden md:flex pl-4 ' />
                    </div>
                </div>
            </nav>
    )
}

export default Header