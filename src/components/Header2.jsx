import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../assets/icon1.png'

const Header2 = () => {
return (
    <nav className='flex flex-row'>
                <div className='flex flex-row justify-self-center w-full px-4 bg-otherbalck'>
                    <Link className='mx-auto' to= '/'>
                        <img src={icon1} alt="logo toptrend" className='w-[140px] h-[160px] lg:mr-20' />
                    </Link>
                </div>
    </nav>
)
}

export default Header2