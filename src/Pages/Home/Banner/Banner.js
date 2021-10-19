import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideOne from "../../../images/slide-one.jpg"
import slideTwo from "../../../images/slide-two.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className="text-primary">Medical Services That You Can Trust</h2>
      <p className="text-primary">Medical services means any care, service, or treatment of illness or dysfunction of, or injury to, the human body.</p>
      <button className="btn btn-success">Read More</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideTwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2 className="text-warning">We Care for You</h2>
      <p className="text-warning">including but not limited to physician care, inpatient care, outpatient care, hospital surgical services, emergency services, ambulance services.</p>
      <button className="btn btn-success">Read More</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;