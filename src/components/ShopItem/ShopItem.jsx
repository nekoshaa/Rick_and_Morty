import { findAllByDisplayValue } from '@testing-library/dom'
import React from 'react'
import { Card, Button } from 'react-bootstrap'


const ShopItem = ({ id, name, status, species, type, gender, origin, location, image, url, episode }) => {
  return (

    <Card.Body className='mainCharacters'>

      <div id='Characters'>

        <Card.Img src={image} />
        {/* <Card.Body src={image}></Card.Body> */}
        <Card.Body>Имя: {name}</Card.Body>
        <Card.Body>Статус: {status}</Card.Body>
        <Card.Body>Раса: {species}</Card.Body>
        <Card.Body>Пол: {gender}</Card.Body>
        <Card.Body>Локация: {location}</Card.Body>
        <Card.Body>Эпизоды: {episode}</Card.Body>
        <Button href='../content'>Подробнее</Button>

      </div>

    </Card.Body>


  )
}


export default ShopItem
