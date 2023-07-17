import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from ".././../assets/1.png"
import first1 from ".././../assets/3.png"
import first2 from ".././../assets/2.png"

const EditorInsights = ({lg}) => {
    return (
        <div>
             <Row xs={1} md={2} lg={lg} className="g-4 mt-4">
      
        <Col >
          <Card>
            <Card.Img variant="top" src={first} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={first1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={first2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
        </div>
    );
};

export default EditorInsights;