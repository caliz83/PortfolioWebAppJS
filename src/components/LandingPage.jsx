import React from 'react'
import { Button, Container } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <Container>
        <div className='hero-image'>
            <Button className='hero-btn' style={{background: "orange"}}>Contact Me</Button>            
        </div>      
    </Container>
  )
}

export default LandingPage
