import React from 'react'

function RoomInput() {
  return (
      <Form.Group>
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

export default RoomInput