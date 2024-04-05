import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Carousel,
  Modal,
} from "react-bootstrap";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
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
import magiceightball from "../assets/magiceightball.jpg";
import spinnerwheel from "../assets/spinnerwheel.jpg";
import clock from "../assets/clock.png";
import "../App.css";
import setBodyColor from "./BgColor";

const LandingPage = () => {
  setBodyColor({ color: "#1E0C0C" });

  const handleClick = () => {
    console.log("Button clicked!");
    const scrollTo = document.getElementById("contact");
    scrollTo.scrollIntoView();
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); //stops everything from automatically refreshing
    emailjs
      .send(
        "service_x4rf249",
        "template_olwngtf",
        {
          from_name: form.name,
          to_name: "Liz",
          from_email: form.email,
          to_email: "lizg1308@gmail.com",
          subject: form.subject,
          message: form.message,
        },
        "Z88KYpR6zauAVwbUj"
      )
      .then(
        () => {
          setShow(true);

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error, "Hey, we have an error; fix it!");
          setShowError(true);
        }
      );
  };

  //for the form
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  //close the modals
  const handleClose = () => setShow(false);
  //success modal
  const [show, setShow] = useState(false);
  //error modal
  const [showError, setShowError] = useState(false);

  return (
    <Container fluid>
      <div
        className="hero-image d-flex justify-content-center"
        style={{ width: "100vw", height: "auto" }}
      >
        <img
          className="hero-image-img"
          src={heroImageURL}
          alt="black and white image of person typing"
        />
        <Button
          onClick={handleClick}
          className="hero-btn"
          style={{ background: "orange", color: "white", padding: 10 }}
        >
          Contact Me
        </Button>
      </div>
      <div className="about" id="about">
        <h2>ABOUT</h2>
        <p>
          I'm a web developer who loves Mexican food, Rezz concerts,
          and dog training. My hobbies include gardening, home repair, and
          maintaining an aquarium; in these activities attention to detail is
          crucial. Let me help you with details!
        </p>
        <img
          className="mx-2"
          style={{ width: 20, height: 20 }}
          src={linkedin_icon2URL}
          alt=""
        />
        <a href="https://www.linkedin.com/in/lizgarciawebdev/">
          My LinkedIn
        </a>
        <br />
        {/* <img
          className="mx-2"
          style={{ width: 20, height: 20 }}
          src={document_iconURL}
          alt=""
        /> */}
        {/* <a href="https://drive.google.com/file/d/16oOFUReO31mfnUuFJTDbiz6OiKD8zChl/view">
          My Resume
        </a> */}
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
        {/* TODO: rework to a grid layout */}
        <div
          style={{ width: "75vw" }}
          className="d-flex justify-content-lg-center carousel"
        >
          <Carousel data-bs-theme="dark" slide={false} autoPlay={1000} loop>
            <Carousel.Item>
              <a href="https://wonderful-river-05519dd1e.4.azurestaticapps.net/">
                <img
                  className="d-block w-100 carousel-item"
                  src={tictactoe}
                  alt="Tic Tac Toe"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Tic Tac Toe game</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://play.unity.com/mg/other/webgl-builds-379257">
                <img
                  className="d-block w-100 carousel-item"
                  src={clock}
                  alt="Clock"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Unity Clock</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://icy-stone-00446451e.4.azurestaticapps.net/">
                <img
                  className="d-block w-100 carousel-item"
                  src={weather}
                  alt="Weather"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Weather app</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://victorious-bush-098a6d91e.4.azurestaticapps.net/">
                <img
                  className="d-block w-100 carousel-item"
                  src={hangman}
                  alt="Hangman"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Hangman game</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://witty-forest-0eb30fb1e.4.azurestaticapps.net/">
                <img
                  className="d-block w-100 carousel-item"
                  src={flashcards}
                  alt="Flashcards"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Flashcard Quiz app</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://play.unity.com/mg/other/webgl-builds-379256">
                <img
                  className="d-block w-100 carousel-item"
                  src={spinnerwheel}
                  alt="Spinner Wheel"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Restaurant Picker</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://wonderful-field-04a14c11e.4.azurestaticapps.net/">
                <img
                  className="d-block w-100 carousel-item"
                  src={trivia}
                  alt="Trivia game"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Trivia game</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <a href="https://witty-bay-0d2108f1e.4.azurestaticapps.net/">
                <img
                  className="d-block w-100 carousel-item"
                  src={reminderapp}
                  alt="Reminder checklist"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Reminder app</p>
              </Carousel.Caption>
            </Carousel.Item>

            {/* unity item added at last minute; if time to find thubmnail image, can add it to website */}
            <Carousel.Item>
              <a href="https://play.unity.com/mg/other/webgl-builds-379233">
                <img
                  className="d-block w-100 carousel-item"
                  src={magiceightball}
                  alt="magic eightball"
                />
              </a>
              <Carousel.Caption>
                <p className="carousel-text">Magic Eightball game</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
        <Row></Row>
        <p>
          Check out my GitHub here:
          <a href="https://github.com/caliz83"> https://github.com/caliz83</a>
          <img
            className="mx-2"
            style={{ width: 20, height: 20 }}
            src={github_iconURL}
            alt=""
          />
        </p>
      </div>
      <div className="contact" id="contact">
        <h2>CONTACT ME!</h2>
        <p>Let's discuss what I can create for you!</p>
        <div>
          <Form className="form" onSubmit={handleSubmit} ref={formRef}>
            <Container fluid>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="Form.ControlInput1">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                      style={{ maxWidth: 685 }}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="Form.ControlInput2">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      style={{ maxWidth: 685 }}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="Form.ControlInput3">
                <Form.Label>Subject:</Form.Label>
                <Form.Control
                  style={{ maxWidth: 1530 }}
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  style={{ maxWidth: 1530 }}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                className="form-btn d-flex justify-content-center"
                style={{
                  backgroundColor: "#2296C8",
                  color: "white",
                  padding: 5,
                  width: 125,
                }}
                type="submit"
              >
                {loading ? "Sending..." : "Send"}
              </Button>
              {/* modal for success */}
              <Modal
                show={show}
                onHide={handleClose}
                style={{ display: "block", position: "initial" }}
              >
                <Modal.Dialog>
                  <Modal.Header style={{ background: "#382b2b" }} closeButton>
                    <Modal.Title
                      style={{ background: "#382b2b", color: "white" }}
                    >
                      Awesome!! XD
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body style={{ background: "#382b2b", color: "white" }}>
                    <p>
                      I'm excited to hear from you; I'll get back to you as soon
                      as possible.
                    </p>
                  </Modal.Body>

                  <Modal.Footer style={{ background: "#382b2b" }}>
                    <Button variant="primary">Close</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal>
              {/* modal for error */}
              <Modal
                show={showError}
                onHide={handleClose}
                style={{ display: "block", position: "initial" }}
              >
                <Modal.Dialog>
                  <Modal.Header style={{ background: "#382b2b" }} closeButton>
                    <Modal.Title
                      style={{ background: "#382b2b", color: "white" }}
                    >
                      Oops!
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body style={{ background: "#382b2b", color: "white" }}>
                    <p>
                      Sorry but it looks like something went wrong; please try
                      again.
                    </p>
                  </Modal.Body>

                  <Modal.Footer style={{ background: "#382b2b" }}>
                    <Button variant="secondary">Close</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal>
            </Container>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
