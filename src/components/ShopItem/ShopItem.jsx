import React from 'react'
import { Card, Button } from 'react-bootstrap'


const ShopItem = ({ id, name, status, species, type, gender, origin, location, image, url, episode }) => {
  return (
    <Card className="Charachers"
      style={{ display: 'flex', justifyContent: 'space-around', padding: '5px', margin: '5px', width: '400px', borderRadius: '5px', boxSizing: 'border-box', color: '#ffff', backgroundColor: '#1b2024', fontSize: '20px' }}>
      <Card.Body><img src={image} alt=""></img></Card.Body>
      <Card.Body>Имя: {name}</Card.Body>
      <Card.Body>Статус: {status}</Card.Body>
      <Card.Body>Раса: {species}</Card.Body>
      <Card.Body>Пол: {gender}</Card.Body>
      <Card.Body>Локация: {location}</Card.Body>
      <Card.Body>Эпизоды: {episode}</Card.Body>
      <Button href='../content'>Подробнее</Button>
    </Card>
  )
}


export default ShopItem
