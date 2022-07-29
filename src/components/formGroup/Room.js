import React from 'react'

function Room(props) {

   const {room, setRoom} = props;

   const input_room = (e) => {
      setRoom(Number(e.target.value))
   }

   return (
      <Form.Group as={Col}>
         <Form.Label>ห้อง</Form.Label>
         <Form.Select onChange={input_room} value={room} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
         </Form.Select>
      </Form.Group>
   )
}

export default Room