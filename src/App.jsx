import { useState } from 'react'
import './App.css'
import { Row, Col } from "react-bootstrap";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="App"> 
    {/* <Row>
      <Col>
      <h1>LIZ GARCIA - WEB DEVELOPER</h1>  
      </Col>
      <Col>
      <Navbar />
      </Col>
      </Row> 
      <LandingPage /> */}
      <Navbar />
    </div> 
    <Routes>
      <Route path="/" element={<LandingPage />} />  
      <Route path='/tech' element={<LandingPage />} />
      <Route path='/work' element={<LandingPage />} />
      <Route path='/ContactMe' element={<ContactMe />} />
      <Route path='/ContactMe' element={<ContactMe />} />  
    </Routes>   
    </BrowserRouter>
  )
}

export default App
