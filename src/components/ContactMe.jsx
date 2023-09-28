import React from 'react'

const ContactMe = () => {
  return (
    <div>
        <h1></h1>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control style={{width: 300}} type="text" placeholder="Name" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control style={{width: 300}} type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control style={{width: 635}} type="text" placeholder="Subject" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control style={{width: 635, height: 200}} type="text" placeholder="Message" />
          </Form.Group>
          <Button className="hero-btn d-flex justify-content-center"
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