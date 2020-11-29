import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import portrait from '../images/Syed_Rizvi_no_bg.png'


export default function Home() {
  return (
    // <div className="HomeScreenContainer" >
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="DescColumn" >
          <div style={{ borderBottomWidth: 2, borderBottomColor: "grey", borderBottomStyle: "solid" }} >
            <p style={{ fontSize: 70, fontWeight: "bold" }} >Syed Rizvi</p>
            <p>
              Computer Science undergraduate at the University of Houston,
              machine learning research assistant, and technology enthusiast.
            </p>
            <p>
              Click around to find out more about me, or check out one of my
              portfolios below:
            </p>
          </div>
          <div>
            (Icons)
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="ImageColumn" >
          <img src={portrait} alt="Syed Rizvi" width="90%" ></img>
        </Col>
      </Row>
    </Container>
    // </div>
  )
}