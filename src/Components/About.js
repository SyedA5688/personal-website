import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import portrait from '../images/portrait.jpg'


export default function About() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4} xl={4} className="AboutImgColumn" >
          <img src={portrait} alt="Portrait" width="95%" className="AboutImg" ></img>
        </Col>
        <Col xs={12} sm={12} md={8} lg={8} xl={8} className="AboutColumn" >
          <h1>About Me</h1>
          <p>
            I am an aspiring machine learning developer and a member of the Houston Ubiquitous 
            Learning Algorithms (HULA) research laboratory based in Houston, TX. As I pursue a
            Bachelor of Science in Computer Science from the University of Houston, I am researching 
            applications of artificial intelligence and computer vision on medical image data.
          </p>
          <p>
            I am proficient in Python, Pytorch, Keras, machine learning utility libraries, 
            and Labelbox image annotation projects. <br/>
            My past experience includes mobile and web design with React, React Native, and Javascript, 
            as well as programming with C++ and Java. <br/>
          </p>
          <h1>Contact Information</h1>
          <p>
            Name: Syed Asad Rizvi <br/>
            Inquiries: asad5688 [at] gmail [dot] com <br/>
            Location: Houston, TX
          </p>
        </Col>
      </Row>
    </Container>
  )
}