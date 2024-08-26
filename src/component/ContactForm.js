import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'; 

const ContactForm = () => {
    const [name, setName]=useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();

    const addContact= (event) =>{
        event.preventDefault();
        dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}});
    }
 
  return (
    <div>
    <Form onSubmit={(event)=>addContact(event)}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(event)=>setName(event.target.value)} /> 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicContact">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="number" placeholder="Enter number" onChange={(event)=>setPhoneNumber(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"> 
      </Form.Group>
      <Button variant="primary" type="submit">
        ADD
      </Button>
    </Form></div>
  )
}

export default ContactForm;