import React from 'react'
import { Carousel} from "react-bootstrap";
import './Carousel.css'
const Slide = () => {
    return (
 
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Homes</h3>
            <p>Separate Homes</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Villas</h3>
            <p>Luxury Villas with various amenities </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d w-100 "
            src="https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Flats</h3>
            <p>Spacious Flats</p>
          </Carousel.Caption>
        </Carousel.Item>
      
      </Carousel>
            
            )
}
 export default Slide;
