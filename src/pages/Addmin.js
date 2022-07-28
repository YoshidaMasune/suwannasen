import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

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
      setName,
      setJaya
    } = props


   const input_section = (e) => {
      setSection(e.target.value)
   }
   const input_room = (e) => {
      setRoom(e.target.value)
   }
   const input_foor = (e) => {
      setFoor(e.target.value)
   }

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
               <Form.Group as={Col}>
                  <Form.Label>สุวรรณเสน</Form.Label>
                  <Form.Select onChange={input_section} value={section}>
                     <option value="1">1</option>
                     <option value="2">2</option>
                  </Form.Select>
                  </Form.Group>

               <Form.Group as={Col}>
                  <Form.Label>ชั้น</Form.Label>
                  <Form.Select onChange={input_foor} value={foor} >
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                  </Form.Select>
               </Form.Group>

               <Form.Group as={Col}>
                  <Form.Label>ห้อง</Form.Label>
                  <Form.Select onChange={input_room} value={room}  >
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                  </Form.Select>
               </Form.Group>
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