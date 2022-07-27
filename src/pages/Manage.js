import React from 'react'
import { Table} from 'react-bootstrap'
import NavbarTop from '../components/NavbarTop'

function Manage() {
   return (
      <>
         <div className="container">
            <Table className="table">
               <thead>
                  <tr>
                     <th>ชื่อ</th>
                  </tr>
               </thead>
            </Table>
         </div>
      </>
   )
}

export default Manage