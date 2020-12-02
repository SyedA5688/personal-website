import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import portrait_no_bg from '../images/portrait_no_bg.png';
import githubIcon from '../images/GitHub-Mark-64px.png';
import linkedInIcon from '../images/linkedin.png';
// import bkgrdImg from '../images/dark_bkgrd.png';


export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="DescColumn" >
          <div style={{ borderBottomWidth: 2, borderBottomColor: "grey", borderBottomStyle: "solid" }} >
            <p style={{ fontSize: 70, fontWeight: "bold", fontFamily: "Castoro" }} >Syed Rizvi</p>
            <p>
              Computer Science undergraduate at the University of Houston,
              machine learning research assistant, and technology enthusiast.
            </p>
            <p>
              Click around to find out more about me, or check out one of my
              portfolios below:
            </p>
          </div>
          <div className="IconsContainer" >
            <a href="http://github.com/SyedA5688" target="_blank" rel="noreferrer" ><img src={githubIcon} alt="GitHub" height="50px" ></img></a>
            <a href="https://www.linkedin.com/in/syed-rizvi-9a406719a" target="_blank" rel="noreferrer" ><img src={linkedInIcon} alt="LinkedIn" height="50px" ></img></a>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="ImageColumn" > {/* style={{ background: `url(${bkgrdImg})`}} */}
          <img src={portrait_no_bg} alt="Syed Rizvi" width="90%" ></img>
        </Col>
      </Row>
    </Container>
  )
}