// -->____IMPORT dependencies____<-- 
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -->____ IMPORT PAGES____<-- 
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Error from './pages/Error';
import Manage from './pages/Manage'
import NavbarTop from './components/NavbarTop';

// -->?___MAIN APP__<--



function App() {

  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='adduser' element={ <AddUser /> } />
        <Route path='manage' element={ <Manage />} />
        <Route path='*' element={<Error /> } / >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
