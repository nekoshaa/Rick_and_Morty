import React from 'react'
import { Navbar, Container, Nav, DropdownButton, ButtonGroup, Dropdown } from 'react-bootstrap'

const Bar = ({ }) => {
  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#">Котики</Navbar.Brand> */}
        <Nav className="me-auto nav">
          <Nav.Link href="/">Главная</Nav.Link>
          <Nav.Link href="/carousel">Фотографии</Nav.Link>
          <Nav.Link href="/content">Подробнее</Nav.Link>
          {/*  <DropdownButton as={ButtonGroup} title="" id="bg-vertical-dropdown-3">
            <Dropdown.Item eventKey="1" href="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png">Не нажимать</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton> */}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Bar
