import React from 'react'
import { Modal, Button } from 'react-bootstrap'


const ShopItemModal = (props) => {

  const name = props.character.name || ""

  const locationName = props.character.location?.name || ""

  return (
    <Modal
      scrollable={true}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.character.name}

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {props.character.id}</p>
        <p>Статус: {props.character.status}</p>
        <p>Раса: {props.character.species}</p>
        <p>Пол: {props.character.gender}</p>
        <p>Первое появление: {props.character.created}</p>
        <p>Локация: {locationName}</p>
        <p>Эпизоды: {props.character.episode}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default ShopItemModal
