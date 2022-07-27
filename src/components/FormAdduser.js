import React, {useState, useEffect} from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'


function FormAdduser(props) {

   const [section, setSection] = useState(1);
   const [foor, setFoor] = useState(1);
   const [room, setRoom] = useState(1);
   const [name, setName] = useState('');
   const [jaya, setJaya] = useState('');
   
   const input_section = (e) => {
      setSection(e.target.value)
   }
   const input_name = (e) => {
      setName(e.target.value)
   }
   const input_jaya = (e) => {
      setJaya(e.target.value)
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

   const push_userinput = (e) => {
      e.preventDefault();   
      setName('');
      setJaya('');
   
      // validate user_input
      if(name === '' || jaya === ''){
         alert("input is not validation")
      }else{
         select_futeur()
      }
   }
 
   return (
         <Form onSubmit={push_userinput}>
            <Form.Group>
               <Form.Label>สุวรรณเสน</Form.Label>
               <Form.Select onChange={input_section} value={section}>
                  <option value="1">1</option>
                  <option value="2">2</option>
               </Form.Select>
               </Form.Group>

            <Form.Group>
               <Form.Label>ชั้น</Form.Label>
               <Form.Select onChange={input_foor} value={foor} >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
               </Form.Select>
            </Form.Group>

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

         <hr /> 
         <div className="container">
            <Form.Group>
               <Form.Label>ชื่อ</Form.Label>
               <Form.Control onChange={input_name} value={name} type='text' />
            </Form.Group>

            <Form.Group>
               <Form.Label>สกุล/ฉายา</Form.Label>
               <Form.Control onChange={input_jaya} value={jaya} type='text' />
            </Form.Group>

            <Form.Group className=' d-flex justify-content-end'>
               <Button className='mt-4'  type="submit">
                  create
               </Button>
            </Form.Group>
         </div>
         
      </Form>     
   )
}

export default FormAdduser