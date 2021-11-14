import React from 'react'
import { CarouselItem } from 'react-bootstrap'
import Carousel from '../CarouselSrc/Carousel'

const CarouselCard = () => {
  const carouselArray = [
    {
      text: "Привет!",
      className: "d-block w-100",
      src: "https://images.pexels.com/photos/2693561/pexels-photo-2693561.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Первый слайд"

    },

  ]
  return (
    <div>
      {carouselArray.map((carousel) => {
        return <Carousel className={carousel.className} src={carousel.src} alt={carousel.alt} text={carousel.text} />

      })}
    </div>
  )
}
export default CarouselCard;
