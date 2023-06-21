import React, { useState,useEffect } from 'react'
import Header2 from '../components/Header2'
import axios from 'axios';


const Users = () => {
  const BaseUrl = 'http://localhost:8080';
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    const fetchUsers = async()=>{
      try{
        const token = localStorage.getItem('token');
        const config = {
          headers:{
            "Authorization": `Bearer ${token}`
          }
        }
        const response = await axios.get(`${BaseUrl}/user/all`, config)
        if(response.data && response.data){
          setUsers(response.data);
        }else{
          console.log('La respueusta no trae a los usuarios, no se porque');
          
        }
      }catch(error){
        console.log('Error en la solicitud',error);
      }
    };

    fetchUsers();
  },[]);
  return (
    <>
      <section> <Header2/> </section>

      {/* Seccion para ver los usuarios */}
      <section className='flex flex-col items-center py-20 px-20'>
        <div className='bg-otherbalck text-white '>
          {users.map((user)=>(
            <ol key={user.code}> 
               <strong>Código:</strong> {user.code}
              <br  />
              <strong>Username:</strong> {user.username}
              <br />
              <strong>Email:</strong> {user.email}
              <hr/>
            </ol>
          ))}

        </div>

      </section>
    </>
  )
}

export default Users