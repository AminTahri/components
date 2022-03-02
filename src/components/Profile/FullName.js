import React from 'react'
import { Table } from 'react-bootstrap'
// import './ProfilePhoto'

const FullName = () => {
  const itemArray =[
    {
      name:`MERCEDES-BENZ CLASSE A 
           `
    },
    {
      name:`MERCEDES-BENZ CLASSE C 
            `
    },
    {
      name:`MERCEDES-BENZ GLE `
    },
    {
      name:`MERCEDES-BENZ GLC`
    },
    {
      name:`MERCEDES-BENZ CLASSE E  `
    },
    {
      name:`MERCEDES-BENZ GLB`
    }
    
  ]
  return (
    <div>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
  {
    itemArray.map(voiture=><tr>
      <td> </td>
      <td> {voiture.name}  </td>
      <td><img src ={ voiture.imgSrc } alt={voiture} /></td>
      <td></td>
    </tr>
      )
  }
  </tbody>
</Table>
    </div>
  )
}

export default FullName