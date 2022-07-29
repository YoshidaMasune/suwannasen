import React from 'react'
import { Form } from 'react-bootstrap'

function Jaya(props) {

   const { jaya, setJaya } = props;

   return (
      <Form.Group>
         <Form.Label>สกุล/ฉายา</Form.Label>
         <Form.Control onChange={ e => setJaya(e.target.value)} value={jaya} type='text' />
      </Form.Group>
   )
}

export default Jaya