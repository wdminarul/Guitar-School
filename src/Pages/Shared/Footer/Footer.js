import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <Container>
            <Row>
    <Col xs={6} md={4} className="p-3">
      <h2>About Us</h2>
      <p>Medical services means any care, service, or treatment of illness or dysfunction of, or injury to, the human body, including but not limited to physician care, inpatient care, outpatient care, hospital surgical services, emergency services, ambulance services, chiropractic services, dental services, audiology services</p>
    </Col>
    <Col xs={6} md={4} className="p-3 general-services">
    <h2>General Services</h2>
    <p>Surgery</p>
    <hr/>
    <p>Dental</p>
    <hr/>
    <p>Medicine</p>
    <hr/>
    <p>Ambulance</p>
    <hr/>
    </Col>
    {/* Footer form for subscribe  */}
    <Col xs={6} md={4} className="p-3">
    <h2 className="subscriber">Subscribe</h2>
    <Form>
        <input className="w-75" type="text" name="" id=""  placeholder="name"/>
        <br />
        <br />
        <input className="w-75"type="email" placeholder="email"/>
        <br />
        <br />
        <Button className="btn btn-danger">Subscribe</Button>
    </Form>
    </Col>
  </Row>
  <hr/>
  <p>&copy; Copyright 2021. All Rights Reserved by Medical Press</p>
</Container>
        </div>
    );
};

export default Footer;