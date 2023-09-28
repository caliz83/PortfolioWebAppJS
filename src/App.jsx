import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    {/* <BrowserRouter> */}
    <div className="App"> 
    <Row>
      <Col>
      
      </Col>
      <Col>
      <Navbar />
      </Col>
      </Row> 
      {/* <LandingPage /> */}
      {/* <ContactMe /> */}
    </div> 
    {/* <Routes>
      <Route path="/" element={<LandingPage />} />  
      <Route path='/tech' element={<LandingPage />} />
      <Route path='/work' element={<LandingPage />} />
      <Route path='/ContactMe' element={<ContactMe />} />
      <Route path='/ContactMe' element={<ContactMe />} />  
    </Routes>   
    </BrowserRouter> */}
    </>
  )
}

export default App
