import React from 'react'
import { Col, Row } from 'react-bootstrap' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const ContactItem = ({item}) => {
  return (
    <Row className='mb-2'>
        <Col className='user-img' lg={2}><FontAwesomeIcon size='2x' icon={faUser} border/></Col>
        <Col lg={10}>
        <div className='user-name'>{item.name}</div>
        <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem