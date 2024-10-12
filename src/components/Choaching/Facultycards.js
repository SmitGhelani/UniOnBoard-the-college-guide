import React from 'react';
import './faculty.css';
import Card from 'react-bootstrap/Card';


  function Facultycards (props){
      return(
          <>
              <Card className='facultyCard'>
                                <Card.Img variant="top" src={props.imgsrc} alt="Faculty1" />
                                <Card.Body className='facultyCardBody'>
                                    <Card.Title className='facultyCardTitle'>
                                        {props.title}
                                    </Card.Title>
                                    <Card.ImgOverlay>
                                        <Card.Text className='facultyCardText'>
                                            {props.description}
                                        </Card.Text>
                                     </Card.ImgOverlay>
                                </Card.Body>
                            </Card>
                      
          </>
      )
  }

  export default Facultycards;