import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import '../Styles/style.css'; 
import b from '../img/blank.avif'
import C1 from '../img/CC_VC.jpg'
import C2 from '../img/CC_C.jpg'
import C3 from '../img/CC_S.png'
import C4 from '../img/CC_T.png'
import C5 from '../img/CC_WM.jpg'
import C6 from '../img/CS_C.jpg'
import C7 from '../img/CS_VC.jpeg'
import C8 from '../img/CS_S.jpg'
import C9 from '../img/WIE_C.png'
import C10 from '../img/WIE_VC.JPG'
import C11 from '../img/TT_L.jpg'
import C12 from '../img/TT_CL.jpg'
//import C13 from '../img/DT_L'
import C14 from '../img/DT_CL.png'
import C15 from '../img/CT_L.jpeg'
import C16 from '../img/CT_CL.png'
import C17 from '../img/NT_L.jpeg'
import C18 from '../img/NT_CL.jpg'

const CouncilCard = ({ name, position, email, imageUrl }) => {
  <h1>COMMITTEE MEMBERS</h1>
  return (
    <Col md={4}>
      <div className="card-container">
        <Card className="council-card">
          <div className="image-container">
            <Card.Img src={imageUrl} alt={name} className="council-image" />
          </div>
          
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{position}</Card.Text>
            <a href={`mailto:${email}`} className="email-link">
              <i className="far fa-envelope"></i>
            </a>
          </Card.Body>
        </Card>
        
      </div>
    </Col>
  );
};

const CouncilCardGrid = () => {
  const councils = [
    { name: 'Swapnil Joshi', position: 'Vice-Chairman', email: 'john@example.com', imageUrl: C1},
    { name: 'Rohan Waghode', position: 'Chairman', email: 'john@example.com', imageUrl:C2},
    { name: 'Kartik Kanchan ', position: 'Secretary', email: 'john@example.com', imageUrl: C3},
    { name: 'Shreyas Bhalekar ', position: 'Treasurer', email: 'john@example.com', imageUrl: C4},
    { name: 'Avisha Shah ', position: 'Webmaster', email: 'john@example.com', imageUrl: C5},
    { name: 'Ayush Panigrahi ', position: 'Computer Society: Chairman', email: 'john@example.com', imageUrl:C6},
    { name: 'Arya Patil ', position: 'Computer Society: Vice-Chairman', email: 'john@example.com', imageUrl: C7},
    { name: 'Shradha Gunjal', position: 'Computer Society: Secretary', email: 'john@example.com', imageUrl: C8},
    { name: 'Tejaswini Todkar ', position: 'Women In Eng: Chairperson', email: 'john@example.com', imageUrl: C9},
    { name: 'Janhavi Kasar', position: 'Women In Eng: Vice-Chairperson', email: 'john@example.com', imageUrl: C10},
    { name: 'Sarthak Deshmukh ', position: 'Technical Team: Lead', email: 'john@example.com', imageUrl: C11},
    { name: 'Navya Agrawal ', position: 'Technical Team: Co-Lead', email: 'john@example.com', imageUrl: C12},
    { name: 'Harsh Maurya ', position: 'Design Team: Lead ', email: 'john@example.com', imageUrl: b},
    { name: 'Om Panchal ', position: 'Design Team: Co-Lead ', email: 'john@example.com', imageUrl: C14},
    { name: 'Suraj Yadav ', position: 'Content Team: Lead ', email: 'john@example.com', imageUrl: C15},
    { name: 'Yash Aggarwal ', position: 'Content Team: Co-Lead ', email: 'john@example.com', imageUrl: C16},
    { name: 'Tanisha', position: 'Networking Team: Lead ', email: 'john@example.com', imageUrl: C17},
    { name: 'Sudhiksha Aradhyula', position: 'Netwoking Team: Co-Lead ', email: 'john@example.com', imageUrl: C18},


    // Add more councils here...
  ];

  return (
    <div className="container">
      <h1 className="text-center">Council Members</h1>
      <Row>
        {councils.map((council, index) => (
          <CouncilCard key={index} {...council} />
        ))}
      </Row>
    </div>
  );
};

export default CouncilCardGrid;
