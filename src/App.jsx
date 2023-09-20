import { useState } from 'react'
import './App.css'
import { Row, Col } from "react-bootstrap";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App"> 
    <Row>
      <Col>
      <h1>LIZ GARCIA - WEB DEVELOPER</h1>  
      </Col>
      <Col>
      <Navbar />
      </Col>
      </Row> 
      <LandingPage />
    </div>
  )
}

export default App
