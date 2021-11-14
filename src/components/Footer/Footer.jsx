import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = ({ }) => {
    return (

        <Container fluid style={{ backgroundColor: 'black', color: '#fff' }}>

            <Container style={{ display: 'flex', justifyContent: 'center', padding: '0px' }}>

                <p>All cats reserved.  2021</p>

            </Container>
        </Container>

    )
}

export default Footer;
