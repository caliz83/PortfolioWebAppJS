import React, { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css'

const Navbar = () => {
    //About
    //Technologies
    //Work
    //Contact Me

    const aboutSection = useRef(null);

    const scrollTo = () => {window.scrollTo({top: aboutSection.current.offsetTop, behavior: 'smooth'})};

  return (
    <BrowserRouter>
    <div
        className='nav d-flex align-content-start justify-content-end m-5'
      activeKey="/home"
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
    </div>    
    </BrowserRouter>
  )
}

export default Navbar
