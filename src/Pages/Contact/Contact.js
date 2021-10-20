import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import logo from "../../images/logo-two.png"
import "./contact.css"

const Contact = () => {
  const history =useHistory();
  const back =()=>{
    history.push("/home")
  }
    return (
        <div className="cover my-5">
            <div className="container">
                <div className="row">
                <div className="col-md-6 text-center mt-5 pt-2">
                    <img src={logo} alt="" />
                    <p className="pt-5 px-3">Having an in-house team of expert medical writers and editors makes all the difference in terms of getting your message, the way you want it, out into the marketplace. Our medical content team knows what it takes to craft the right messages to the right audiences. They are experts at securing accurate references from scientific journals, medical publications and clinical sources. In addition, our skilled medical content team is well versed in the legal and regulatory considerations of the online space and keep up-to-date on the latest trends in the marketplace, so you don’t have to.</p>
                </div>
                <div className="col-md-6">
                <Form className="bg-danger p-5">
  <Row className="mb-3 ">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="success" type="" className="btn btn-success" onClick={back}>
    Submit
  </Button>
</Form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;