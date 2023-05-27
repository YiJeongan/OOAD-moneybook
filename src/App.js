import React, { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import SetHope from './SetHope';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Main from './pages/Main';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={
        <>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">희망지출가계부</Navbar.Brand>
        </Container>
      </Navbar>
        <p>희망 지출 비용 (원)</p>
        <SetHope/>
        </>
      }></Route>
      <Route path="/main" element={<Main/>}>
      </Route>
    </Routes>
      
      
    </>
  );
}

export default App;