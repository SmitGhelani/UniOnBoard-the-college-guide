import React from 'react';
import './faculty.css';
import Card from 'react-bootstrap/Card';


  function TopCourse (props){
      return(
          <div>
              <Card className='facultyCardd'>
                                <Card.Img variant="top" src="./imgs/motive/girl.png" className='imgcard'/>
                                <Card.Body className='facultyCardBodyy'>
                                    <Card.Title className='facultyCardTitle'>
                                        {props.title}
                                    </Card.Title>
                                    <Card.Text>
                                        <Card.Text className='facultyCardTextt'>
                                            {props.description}
                                        </Card.Text>
                                     </Card.Text>
                                </Card.Body>
                            </Card>
                      
          </div>
      )
  }

  export default TopCourse;