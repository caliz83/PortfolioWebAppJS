import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
//import '../Contact.css';

const ContactMe = () => {
  return (
    <div className='blagh'>
        <h1 className='beautiful d-flex justify-content-center'>Let's create something beautiful!</h1>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control style={{maxWidth: 635}} type="text" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control style={{maxWidth: 635}} type="email" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control style={{maxWidth: 1300}} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control style={{maxWidth: 1300, height: 200}} type="text" />
          </Form.Group>
          <Button className="form-btn d-flex justify-content-center"
            style={{ backgroundColor: "#2296C8", color: "white", padding: 5, width: 125 }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      
    </div>
  )
}

export default ContactMe