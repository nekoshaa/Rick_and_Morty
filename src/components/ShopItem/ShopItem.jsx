import { findAllByDisplayValue } from '@testing-library/dom'
import React from 'react'
import { Card, Button } from 'react-bootstrap'


const ShopItem = ({ name, image, onButtonClick }) => {
  return (

    <Card.Body className=''>

      <div id='Characters'>

        <Card.Img src={image} style={{ width: 380 }} />
        <Card.Body>Имя: {name}</Card.Body>
        {/* <Card.Body>Статус: {status}</Card.Body>
        <Card.Body>Раса: {species}</Card.Body>
        <Card.Body>Пол: {gender}</Card.Body>
        <Card.Body>Локация: {location}</Card.Body>
        <Card.Body>Эпизоды: {episode}</Card.Body> */}
        <Button onClick={onButtonClick}>Подробнее</Button>

      </div>


    </Card.Body>



  )
}


export default ShopItem
