import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import { logout } from '../services/LoginService';


import icon1 from '../assets/icon1.png'

const Header2 = () => {
    const navigate = useNavigate();

    const onClickLogout = () => {
        Swal.fire({
            title: 'Cerrar sesión',
            text: '¿Deseas cerrar sesión?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Salir',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                logout();
                navigate('/');
            } else if (result.isDenied) {
                return;
            }
        })
    }
return (
    <nav className='flex flex-row'>
                <div className='flex flex-row justify-self-center w-full px-4 bg-otherbalck'>
                    <Link className='mx-auto' to= '/'>
                        <img src={icon1} alt="logo toptrend" className='w-[140px] h-[160px] lg:mr-20' />
                    </Link>
                    <div className='flex flex-row items-center justify-end'>
                        <button className='bg-logout rounded-2xl py-4 px-6 hover:bg-logout2' onClick={onClickLogout}><span className='text-white'>Cerrar sesión</span> </button>
                        
                    </div>
                </div>
    </nav>
)
}

export default Header2