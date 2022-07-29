import React from 'react'
import { Table } from 'react-bootstrap'

import ListUserItem from './ListUserItem';

function ListUsers(props) {
  const { users } = props;
  return (
    <>
      <div className="container">
        <Table>
          <thead>
            <tr>
              <th>ห้อง</th>
              <th>ชื่อ</th>
              <th>ราคา</th>
              <th>details</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map(user => {
                return (
                  <tr key={user.id}>
                    <ListUserItem user={user} />
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default ListUsers