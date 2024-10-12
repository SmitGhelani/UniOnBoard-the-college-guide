import * as React from 'react';
import './faculty.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-elastic-carousel'

import TopCourse from './TopCourse';

import { fontWeight, styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import SearchIcon from '@mui/icons-material/Search';
  
  
  const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];

const Courses = (props) => {
  
  const colors = {
    50: '#FFFFFF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#2C6CF91F',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };
  
  const Tab = styled(TabUnstyled)`
     font-family: 'Poppins', sans-serif;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: #0365EE;
    width: 100%;
    padding: 12px 14px;
    margin: 5px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items:center;
  
    &:hover {
      background-color: ${colors[400]};
    }
  
    &:focus {
      color: #fff;
      border-radius: 3px;
      outline: 2px solid ${colors[400]};
      outline-offset: 2px;
    }
  
    &.${tabUnstyledClasses.selected} {
      background-color: ${colors[50]};
      color: ${colors[600]};
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;
  
  // const TabPanel = styled(TabPanelUnstyled)`
  //   width: 100%;
  //   font-family: 'Poppins', sans-serif;
  //   font-size: 0.875rem;
  // `;
  
  const TabsList = styled(TabsListUnstyled)`
    min-width: 100%;
    background-color: ${colors[500]};
    border-radius: 8px;
    margin-bottom: 16px;
    margin-right:10px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;

return(
    <div>
       <h2 className='pt-4 mt-4 pb-4 mb-4  motiveh1'><b>Top Searched Courses</b></h2>  
       <div className='pt-4 mt-4 pb-4 mb-4 d-flex justify-content-center align-items-center '>
       <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab><ConnectedTvIcon className='me-2'/>Online Coaching result</Tab>
        <Tab><PeopleAltIcon className='me-2'/>Offline Coaching result</Tab>
       
      </TabsList>
      
     </TabsUnstyled>
     </div>
       <div className='pt-4 mt-4 pb-4 mb-4 d-flex justify-content-center align-items-center switchh'>

       <Container>
        <Row>
            <Col>
                <Carousel 
                    breakPoints={breakPoints} 
                    itemPadding={[0, 22]} 
                    itemsToShow={3}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={500}
                    >
                    
                        <TopCourse title="NDA Exam" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s" />
                    
                    
                        <TopCourse title="Territorial Army Exam" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s" />
                    
                    
                        <TopCourse title="AFCAT Exam" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s" />
                    
                    <TopCourse title="NDA Exam" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s" />
                    <TopCourse title="Territorial Army Exam" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s" />
                    <TopCourse title="AFCAT Exam" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s" />
                </Carousel>
            </Col>
        </Row>
        </Container>
</div>
</div>
  );


}

export default Courses;
