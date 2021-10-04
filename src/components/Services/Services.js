import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Services = (props) => {
    const{name, img, price} = props.classs;
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            tk: {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    
    );
};

export default Services;