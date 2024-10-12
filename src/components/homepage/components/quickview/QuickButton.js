import React from 'react'
import { Button } from 'react-bootstrap';

const QuickButton = (props) => {
  
  return (
    <div>
    <div >
  
    <Button  className='quickviewbutton' size='lg' active>{props.btn1}</Button>
        {/* <Button  className='btn1' size='lg'>CDS</Button>
        <Button  className='btn1' size='lg'>AFCAT</Button>
        <Button   className='btn1' size='lg'>TGC </Button> */}
        
    </div>
    </div>
  )
}

export default QuickButton