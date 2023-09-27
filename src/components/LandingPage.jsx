import React from "react";
import { Button, Container, Form, Row, Col, Carousel, Image } from "react-bootstrap";
import heroImageURL from "../assets/heroImage.jpg";

const LandingPage = () => {



  return (
    <Container>
      <div className="hero-image d-flex justify-content-center">
        <img src={heroImageURL} alt="black and white image of person typing" />
        <Button
          className="hero-btn"
          style={{ background: "orange", color: "white", padding: 10 }}
        >
          Contact Me
        </Button>
      </div>
      <div className="about" id="about">
        <h2>ABOUT</h2>
        <p>
          I'm a non-binary web developer who loves Mexican food, Rezz concerts,
          and dog training. My hobbies include gardening, home repair, and
          maintaining an aquarium; in these activities attention to detail is
          crucial. Let me help you with details!
        </p>
        {/* links to linkedin and resume here */}
      </div>
      <div className="tech" href="tech">
        <h2>TECHNOLOGIES</h2>
        <p>
          I have experience in C#, HTML, CSS, JavaScript, Typescript, React,
          Azure, SQL, SQLServer, and Unity.
        </p>
      </div>
      <div className="work" id="work">
        <h2>WORK</h2>
        <p>Some of my past projects include: </p>
        {/* carousel of struggles */}
        <Carousel data-bs-theme="dark" slide={false}>

          <Carousel.Item>
            <img className="d-block w-100" src="" alt=""/>
            <Carousel.Caption>
              <p>Tic Tac Toe game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="d-block w-100" src="" alt=""/>
            <Carousel.Caption>
              <p>Weather app</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="d-block w-100" src="" alt=""/>
            <Carousel.Caption>
              <p>Hangman game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img className="d-block w-100" src="" alt=""/>
            <Carousel.Caption>
              <p>Flashcard Quiz app</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <Image className="d-block w-100" src="" alt=""/>
            <Carousel.Caption>
              <p>Trivia game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <Image className="d-block w-100" src="" alt=""/>
            <Carousel.Caption>
              <p>Reminder app</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        <p>
          Check out my GitHub here: Check out my GitHub here:
          https://github.com/caliz83
          {/* add github icon */}
        </p>
      </div>
      <div className="contact" id="contact">
        <h2>CONTACT ME!</h2>
        <p>Let's discuss what I can create for you!</p>
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control style={{width: 635}} type="text" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control style={{width: 635}} type="email" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control style={{width: 1300}} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control style={{width: 1300, height: 200}} type="text" />
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
