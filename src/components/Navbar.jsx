import React, { useRef } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import LandingPage from './LandingPage';
import ContactMe from './ContactMe';
import '../App.css'

const Navbar = () => {
    //About
    //Technologies
    //Work
    //Contact Me

    //const aboutSection = useRef(null);

    const scrollTo = () => {window.scrollTo({top: aboutSection.current.offsetTop, behavior: 'smooth'})};

  return (
    <BrowserRouter>
    <Row className='d-flex justify-content-evenly'>
      <Col>
      <h1 className=''>LIZ GARCIA - WEB DEVELOPER</h1> 
      </Col>
    <Col
        className='nav d-flex align-content-start m-5'
      activekey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <h2>
        <Link className='nav' to='#about'>About</Link>
      </h2>
      <h2>
        <Link className='nav' to='#tech'>Technologies</Link>
      </h2>
      <h2>
        <Link className='nav' to='#work'>Work</Link>
      </h2>
      <h2>
        <Link className='nav' to='#contact'>Contact Me</Link>
      </h2>
    </Col>          
    </Row>

    <Routes>
      <Route path="/" element={<LandingPage />} />  
      <Route path='/tech' element={<LandingPage />} />
      <Route path='/work' element={<LandingPage />} />
      <Route path='/contact' element={<LandingPage />} />
      <Route path='/ContactMe' element={<ContactMe />} />
      
       
    </Routes>   
    
    </BrowserRouter>
  )
}

export default Navbar
