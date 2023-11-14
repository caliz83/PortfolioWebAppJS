import React from "react";
import { Button, Container, Form, Row, Col, Carousel } from "react-bootstrap";
import heroImageURL from "../assets/heroImage.jpg";
import document_iconURL from "../assets/document_icon.png";
import github_iconURL from "../assets/github_icon.png";
import linkedin_icon2URL from "../assets/linkedin_icon2.png";
import tictactoe from "../assets/tictactoe.png";
import weather from "../assets/weatherapp.jpg";
import hangman from "../assets/hangman.png";
import flashcards from "../assets/flashcards.png";
import trivia from "../assets/trivia.jpg";
import reminderapp from "../assets/reminderapp.png";
import { useNavigate } from "react-router-dom";
import '../App.css';
import setBodyColor from './BgColor';


const LandingPage = () => {

  setBodyColor({color: "#1E0C0C"})

  // const [color, setColor] = useState('#1E0C0C') //#77B8B4
  // const click = color => {
  //   setColor(color);
  // }

  let navigate = useNavigate();

  const handleClick = () => {
    console.log("Button clicked!");
    navigate('/ContactMe');
    // setColor('#77B8B4');
  }

  let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    // number of slides per carousel-item
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


  return (
    <Container fluid> 
      <div className="hero-image d-flex justify-content-center" style={{width: '100vw', height: 'auto'}}>
        <img className="hero-image-img" src={heroImageURL} alt="black and white image of person typing" />
        <Button onClick={handleClick}
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
        <img className="mx-2" style={{width: 20, height: 20}} src={linkedin_icon2URL} alt="" />
        <a href="https://www.linkedin.com/in/elizabeth-liz-garcia-31231b95">My LinkedIn</a>
        <br />
        <img className="mx-2" style={{width: 20, height: 20}} src={document_iconURL} alt="" />
        <a href="https://drive.google.com/file/d/16oOFUReO31mfnUuFJTDbiz6OiKD8zChl/view">My Resume</a>
      </div>
      <div className="tech" id="tech">
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
        <div style={{ width: '75vw'}}>
        <Carousel data-bs-theme="dark" slide={false} className="d-flex justify-content-lg-center carousel" cols={4} rows={1} gap={4} autoPlay={1000} loop>

          <Carousel.Item>
            <a href="https://wonderful-river-05519dd1e.4.azurestaticapps.net/"><img className="d-block w-100 carousel-item" src={tictactoe} alt=""/></a>
            <Carousel.Caption>
              <p>Tic Tac Toe game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <a href=""><img className="d-block w-100 carousel-item" src={weather} alt=""/></a>
            <Carousel.Caption>
              <p>Weather app</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <a href="https://victorious-bush-098a6d91e.4.azurestaticapps.net/"><img className="d-block w-100 carousel-item" src={hangman} alt=""/></a>
            <Carousel.Caption>
              <p>Hangman game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <a href="https://witty-forest-0eb30fb1e.4.azurestaticapps.net/"><img className="d-block w-100 carousel-item" src={flashcards} alt=""/></a>
            <Carousel.Caption>
              <p>Flashcard Quiz app</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <a href=""><img className="d-block w-100 carousel-item" src={trivia} alt=""/></a>
            <Carousel.Caption>
              <p>Trivia game</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <a href="https://witty-bay-0d2108f1e.4.azurestaticapps.net/"><img className="d-block w-100 carousel-item" src={reminderapp} alt=""/></a>
            <Carousel.Caption>
              <p>Reminder app</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
        </div>
        <Row>

        </Row>
        <p>
          Check out my GitHub here: 
          <a href="https://github.com/caliz83"> https://github.com/caliz83</a>
        <img className="mx-2" style={{width: 20, height: 20}} src={github_iconURL} alt="" />
        </p>
      </div>
      <div className="contact" id="contact">
        <h2>CONTACT ME!</h2>
        <p>Let's discuss what I can create for you!</p>
        <div>
        <Form>
          <Container fluid>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name:</Form.Label>
                <Form.Control style={{maxWidth: 685}} type="text" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control style={{maxWidth: 685}} type="email" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control style={{maxWidth: 1530}} type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control style={{maxWidth: 1530, height: 200}} type="text" />
          </Form.Group>
          <Button className="form-btn d-flex justify-content-center"
            style={{ backgroundColor: "#2296C8", color: "white", padding: 5, width: 125 }}
            type="submit"
          >
            Submit
          </Button>
          </Container>
        </Form>

        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
