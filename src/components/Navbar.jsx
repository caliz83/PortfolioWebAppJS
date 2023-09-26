import React, { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    //About
    //Technologies
    //Work
    //Contact Me

    const aboutSection = useRef(null);

    const scrollTo = () => {window.scrollTo({top: aboutSection.current.offsetTop, behavior: 'smooth'})};

  return (
    <Nav
        className='nav d-flex justify-content-end m-5'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link as={Link} to='/'>About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='#tech'>Technologies</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='#work'>Work</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to='#contact'>Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navbar
