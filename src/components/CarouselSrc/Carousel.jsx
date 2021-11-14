import React from 'react'
import { Carousel } from 'react-bootstrap'
import ShopItem from '../ShopItem/ShopItem'

const CarouselCard = ({ }) => {
    return (

        <Carousel variant="white">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1510543/pexels-photo-1510543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Первый слайд</h5>
                    <p>Описание</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1510543/pexels-photo-1510543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Второй слайд</h5>
                    <p>Описание</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1510543/pexels-photo-1510543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Третий слайд</h5>
                    <p>Описание</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>

    )
}

export default CarouselCard
