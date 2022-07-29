import React from 'react'

function ListUserItem(props) {
   const { user } = props
   return (
      <>
         <td>{user.id}</td>
         <td>{user.username}</td>
         <td>545</td>
         <td>{user.id}</td>
      </>
   )
}

export default ListUserItem