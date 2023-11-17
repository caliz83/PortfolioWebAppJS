import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import emailjs from "@emailjs/browser";

//service_x4rf249 (service key)
//template_olwngtf (template key)
//Z88KYpR6zauAVwbUj (public key)

const ContactForm = () => {
  function FormExample() {
    // const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);

    const formRef = useRef();

    const handleSubmit = (e) => {
      // const form = event.currentTarget;
      // if (form.checkValidity() === false) {
      //   event.preventDefault();
      //   event.stopPropagation();
      // }

      // setValidated(true);
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
            alert("I'm excited to hear from you; I will get back to you as soon as possible");
            // change to a modal?? per Jose

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

            alert("Oh no! something went wrong; please try again!");
            //also change to a modal, per Jose
          }
        );
    };

    const handleChange = (e) => {
      const { name, value } = e.target;

      setForm({ ...form, [name]: value });
    };

    return (
      <Form
        // noValidate
        // validated={validated}
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="your email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Send me a message"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">{ loading ? "sending..." : "Send" }</Button>
      </Form>
    );
  }
};

export default ContactForm;
