import React from 'react';
import './review.css';
import { Container, Row, Col} from 'react-bootstrap';

const Reviewcard = (props) => {
  return (
    <>
        <div className='reviewCardBox'>
            <Row className='reviewCardDesRow'>
                <div className='reviewCardDescription'>
                    {props.description}
                </div>
            </Row>
            <Row><p></p><p></p></Row>
            <Row className='reviewCardDetail'>
                <Col sm={4}>
                    <img className='reviewCardImg' src={props.src} />
                </Col>
                <Col sm={8}>
                    <p className='reviewCardName'>{props.name}</p>
                    <p className='reviewCardDesignation'>{props.designation}</p>
                </Col>
            </Row>
        </div>
    </>
  );
};

export default Reviewcard;
