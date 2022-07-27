// -->____IMPORT dependencies____<-- 
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -->____ IMPORT PAGES____<-- 
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Error from './pages/Error';
import Addmin from './pages/Addmin'
import NavbarTop from './components/NavbarTop';
import EditUser from './pages/EditUser';

// -->?___MAIN APP__<--


function App() {
  
  const [section, setSection] = useState(1);
  const [foor, setFoor] = useState(1);
  const [room, setRoom] = useState(1);
  const [name, setName] = useState('');
  const [jaya, setJaya] = useState('');

  return (
    <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route 
          path='adduser'

          element=
          { 
            <AddUser 
              section={section} 
              foor={foor} 
              room={room}
              name={name}
              jaya={jaya}
              setSection={setSection} 
              setFoor={setFoor}
              setRoom={setRoom}
              setName={setName}
              setJaya={setJaya}
            /> 
          } 
        />

        // addmin ROUTE
        <Route 
          path='addmin' 
          element=
          { 
            <Addmin 
              section={section} 
              foor={foor} 
              room={room}
              name={name}
              jaya={jaya}
              setSection={setSection} 
              setFoor={setFoor}
              setRoom={setRoom}
              setName={setName}
              setJaya={setJaya}
            />
          }
        />

        <Route path='edit' element={ <EditUser />} />
        <Route path='*' element={<Error /> } / >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
