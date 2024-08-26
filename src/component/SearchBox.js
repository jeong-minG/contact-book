import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const SearchBox = () => {
    let [keyword, setKeyword] = useState("");
    let dispatch = useDispatch();
    let {contact} = useSelector((state)=>state)
    const searchName = (event) => {
        event.preventDefault();
        dispatch({type:"SEARCH_USER", payload:{ keyword }})
    }
  return ( 
    <Form onSubmit={searchName}>
        <Row className='mb-2'>
            <Col lg={10}>
            <Form.Control type="text" placeholder="name"  onChange={(event)=>setKeyword(event.target.value)} /> 
            </Col>
            <Col lg={2}>
            <Button variant="primary" type="submit">
        SEARCH
      </Button></Col>
        </Row>  
        </Form>
  )
}

export default SearchBox