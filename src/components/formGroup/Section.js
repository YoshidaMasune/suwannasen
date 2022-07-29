import React from 'react';
import { Form, Col } from 'react-bootstrap';

function Section(props) {

   const {section, setSection} = props;

   const input_section = (e) => {
      setSection(e.target.value)
   }
   
   return (
      <Form.Group as={Col}>
         <Form.Label>สุวรรณเสน</Form.Label>
         <Form.Select onChange={input_section} value={section}>
            <option value="1">1</option>
            <option value="2">2</option>
         </Form.Select>
      </Form.Group>
   )
}

export default Section