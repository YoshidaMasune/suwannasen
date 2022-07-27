import React, { useEffect, useState } from 'react'
import NavbarTop from '../components/NavbarTop';
import ListUsers from '../components/ListUsers';
import { Outlet } from 'react-router-dom';

function Home() {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( data => setUsers(data))
  }, []);

  console.log(users);
  return (
    <>
    <div className="container">
      <ListUsers users={users}/>
    </div>
      
    </>
  )
}

export default Home