import React from 'react'
import FormAdduser from '../components/FormAdduser';

function AddUser(props) {

  const {
    section,
    foor,
    room,
    name,
    jaya,
    setSection,
    setFoor,
    setRoom,
    setName,
    setJaya
  } = props

  return (
   <>
    <div className="container">
      <FormAdduser 
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
    </div>
   </>
  
  )
}

export default AddUser