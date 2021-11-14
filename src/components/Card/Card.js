import React from 'react'
import { Button, Dropdown } from 'react-bootstrap';

const Card = ({ title, text, сolor, children }) => {

  return (
    <div style={{ backgroundColor: сolor }} className="card">
      <h1 className="cardTitle">{title}</h1>
      {children}
      <Button variant="secondary">Click me</Button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <p>{text}</p>
    </div>
  )
}

export default Card
