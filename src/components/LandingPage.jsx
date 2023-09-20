import React from "react";
import { Button, Container, Form, Row, Col, Carousel } from "react-bootstrap";

const LandingPage = () => {
  const heroImageURL = "./assets/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg";

  return (
    <Container>
      <div className="hero-image">
        <Button
          className="hero-btn"
          style={{ background: "orange", color: "white" }}
        >
          Contact Me
        </Button>
      </div>
      <div className="about">
        <h2>ABOUT</h2>
        <p>
          I'm a non-binary web developer who loves Mexican food, Rezz concerts,
          and dog training. My hobbies include gardening, home repair, and
          maintaining an aquarium; in these activities attention to detail is
          crucial. Let me help you with details!
        </p>
        {/* links to linkedin and resume here */}
      </div>
      <div className="tech">
        <h2>TECHNOLOGIES</h2>
        <p>
          I have experience in C#, HTML, CSS, JavaScript, Typescript, React,
          Azure, SQL, SQLServer, and Unity.
        </p>
      </div>
      <div className="work -8">
        <h2>WORK</h2>
        <p>Some of my past projects include: </p>
        {/* carousel of struggles */}
        <Carousel data-bs-theme="dark" slide={false}>

          <Carousel.Item>
            <Carousel.Caption>
              <p>Tic Tac Toe game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <p>Weather app</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <p>Hangman game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <p>Flashcard Quiz app</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <p>Trivia game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Carousel.Caption>
              <p>Reminder app</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <p>
          Check out my GitHub here: Check out my GitHub here:
          https://github.com/caliz83
        </p>
      </div>
      <div>
        <h2>CONTACT ME!</h2>
        <p>Let's discuss what I can create for you!</p>
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
          <Button className="d-flex justify-content-center"
            style={{ backgroundColor: "#2296C8", color: "white", padding: 5, width: 125 }}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LandingPage;
