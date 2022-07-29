import React from 'react'

function Foor(props) {

   const {foor, setFoor} = props;

   const input_foor = (e) => {
      setFoor(Number(e.target.value))
   }

   return (
      
      <Form.Group as={Col}>
         <Form.Label>ชั้น</Form.Label>
         <Form.Select onChange={input_foor} value={foor} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
         </Form.Select>
      </Form.Group>
   )
}

export default Foor