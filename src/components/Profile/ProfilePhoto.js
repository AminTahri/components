import React from 'react'
import { Table } from 'react-bootstrap'
import './FullName'

const ProfilePhoto = () => {
  const itemArray =[
    {
      imgSrc: `https://catalogue.automobile.tn/max/2021/02/41817.webp?t=1641459977`,
      name:`MERCEDES-BENZ CLASSE A `,
      adresse:`COMPLEXE INDUSTRIEL CHARGUIA 1 2035 TUNIS, TUNISIE`
    },
    {
      imgSrc: `https://catalogue.automobile.tn/max/2021/11/46672.webp?t=1641129632`,
      name:`MERCEDES-BENZ CLASSE C `,
      adresse:`COMPLEXE INDUSTRIEL CHARGUIA 1 2035 TUNIS, TUNISIE`
    },
    {
      imgSrc: `https://catalogue.automobile.tn/max/2021/02/46535.webp?t=1613212040`,
      name:`MERCEDES-BENZ GLE `,
      adresse:`COMPLEXE INDUSTRIEL CHARGUIA 1 2035 TUNIS, TUNISIE`
    },
    {
      imgSrc: `https://catalogue.automobile.tn/max/2021/02/40432.webp?t=1641129736`,
      name:`MERCEDES-BENZ GLC`,
      adresse:`COMPLEXE INDUSTRIEL CHARGUIA 1 2035 TUNIS, TUNISIE`
    },
    {
      imgSrc:`https://catalogue.automobile.tn/max/2021/03/46559.webp?t=1641382365`,
      name:`MERCEDES-BENZ CLASSE E `,
      adresse:`COMPLEXE INDUSTRIEL CHARGUIA 1 2035 TUNIS, TUNISIE`
    },
    {
      imgSrc:`https://catalogue.automobile.tn/max/2020/12/46484.webp?t=1641128482`,
      name:`MERCEDES-BENZ GLB`,
      adresse:`COMPLEXE INDUSTRIEL CHARGUIA 1 2035 TUNIS, TUNISIE`
    },
   
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
      <td> <button onClick ={() => alert (`This cars is ${voiture.name}`)} >Info</button></td>
      <td> {voiture.name}</td>
      <td> <img src ={ voiture.imgSrc } alt={voiture} /></td>
      <td> {voiture.adresse} </td>
    </tr>
      )
  }
  </tbody>
</Table>
    </div>
  )
}

export default ProfilePhoto
