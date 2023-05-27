import React, { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function SetHope() {
  const [hopeFood, setHopeFood] = useState(null);
  const [hopeTs, setHopeTs] = useState(null);
  const [hopeNec, setHopeNec] = useState(null);
  const [hopeUb, setHopeUb] = useState(null);
  const [hopeSh, setHopeSh] = useState(null);
  const [hopeEtc, setHopeEtc] = useState(null);
  
  const navigate = useNavigate();


  return (
    <>
      <InputGroup size="sm" className="mb-3" type="number">
        <InputGroup.Text id="inputGroup-sizing-sm">식비</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          value={hopeFood}
          onChange={(e)=>{setHopeFood(e.target.value)}}
        />
        <button onClick={()=>{localStorage.setItem('희망식비',hopeFood)}}>등록</button>
      </InputGroup>
      <InputGroup size="sm" className="mb-3" type="number">
        <InputGroup.Text id="inputGroup-sizing-sm">교통비</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          value = {hopeTs}
          onChange={(e)=>{setHopeTs(e.target.value)}}
        />
        <button onClick={()=>{localStorage.setItem('희망교통비',hopeTs)}}>등록</button>
      </InputGroup>
      <InputGroup size="sm" className="mb-3" type="number">
        <InputGroup.Text id="inputGroup-sizing-sm">생필품</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          value={hopeNec}
          onChange={(e)=>{setHopeNec(e.target.value)}}
        />
        <button onClick={()=>{localStorage.setItem('희망생필품비',hopeNec)}}>등록</button>
      </InputGroup>
      <InputGroup size="sm" className="mb-3" type="number">
        <InputGroup.Text id="inputGroup-sizing-sm">공과금</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          value={hopeUb}
          onChange={(e)=>{setHopeUb(e.target.value)}}
        />
        <button onClick={()=>{localStorage.setItem('희망공과금',hopeUb)}}>등록</button>
      </InputGroup>
      <InputGroup size="sm" className="mb-3" type="number">
        <InputGroup.Text id="inputGroup-sizing-sm">쇼핑</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          value={hopeSh}
          onChange={(e)=>{setHopeSh(e.target.value)}}
        />
        <button onClick={()=>{localStorage.setItem('희망쇼핑비',hopeSh)}}>등록</button>
      </InputGroup>
      <InputGroup size="sm" className="mb-3" type="number">
        <InputGroup.Text id="inputGroup-sizing-sm">기타</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          type="number"
          value={hopeEtc}
          onChange={(e)=>{setHopeEtc(e.target.value)}}
          />
        <button onClick={()=>{localStorage.setItem('희망기타비용',hopeEtc)}}>등록</button>
      </InputGroup>

      <button onClick={()=>{navigate("/main")}}>START</button>
      
    </>
  );
}

export default SetHope;