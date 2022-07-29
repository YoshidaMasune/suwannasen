import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

import Foor from '../components/formGroup/Foor';
import Room from '../components/formGroup/Room';
import Section from '../components/formGroup/Section';

function Addmin(props) {
   const miterbefore = 1456;
   const [miterafter, setMiterafter] = useState(miterbefore);
   const name = 'สามารถ พยัคฆา'
   const {
      section,
      foor,
      room,
      setSection,
      setFoor,
      setRoom,
    } = props;

   const select_futeur = () => { 
      // CHECK ROOM
      if (room < 5){setRoom(room+1)}
      else {
         setRoom(1)
         
         // CHECK FOOR
         if (foor < 3){setFoor(foor+1)}
         else {
            setFoor(1)

            // CHECK SECTION 
            if (section < 2){ setSection( section+1)}
            else {setSection(1)}
         }
      }        
   }

   // VALIDATE MITER INPUT

   const AfterMiter = (e) => {
      setMiterafter(e.target.value);
   }
 
   const push_userinput = (e) => {
      e.preventDefault();   
      if (miterafter.toString().length === 4) {
         console.log('send value')
         setMiterafter(miterbefore)
         select_futeur()
         
      }else{
         alert('กรอกเลให้ถูกต้อง')
      }
      // validate user_input
      
   }

   return (
      <>
         <div className="container">
            <Form onSubmit={push_userinput}>
            <Row>
               <Section section={section} setSection={setSection} />
               <Foor foor={foor} setFoor={setFoor} />
               <Room room={room} setRoom={setRoom} /> 
            </Row>

            <Form.Group>
               <Form.Label>name</Form.Label>
               <Form.Control type='text' value={name} readOnly={true}  />
            </Form.Group>

            <Row>
               <Form.Group as={Col} >
                  <Form.Label>ครั้งก่อน</Form.Label>
                  <Form.Control type="number" value={miterbefore} readOnly={true} />
               </Form.Group>

               <Form.Group as={Col} >
                  <Form.Label>ครั้งหลัง</Form.Label>
                  <Form.Control onChange={AfterMiter} type="number" placeholder={miterafter} value={miterafter} />
               </Form.Group>
            </Row>

            <Form.Group className=' d-flex justify-content-end'>
               <Button className='mt-4'  type="submit">
                  create
               </Button>
            </Form.Group>
            </Form>
         </div>
      </>
   )
}

export default Addmin