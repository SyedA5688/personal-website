import React from 'react';
import { Button } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Projects() {
  return (
    <div className="ProjectScreenContainer" >
      <div style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "black", width: "75vw" }} >
        <h1>Independent Projects</h1>
        <div style={{ width: '100%', marginTop: '5vh' , display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }} >
          <h3 style={{ fontFamily: 'Castoro' }} >Mobile and Web Design</h3>
          <h3 style={{ fontFamily: 'Castoro' }} >Machine Learning</h3>
        </div>
      </div>
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(135, 206, 235)', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(135, 206, 235)' }}
          date="November 2020"
          position={"left"}
          iconStyle={{ background: 'rgb(135, 206, 235)', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">Labelbox Custom Medical Image Annotation Interface</h3>
          <p style={{ marginBottom: 10 }} >
            Developed a custom interface using ReactJS and the Labelbox Javascript API to allow for rapid grid label
            application on medical images.
          </p>
          <a href="https://github.com/SyedA5688/labelbox-custom-interface" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(244, 185, 95)', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(244, 185, 95)' }}
          date="September 2020"
          position={"right"}
          iconStyle={{ background: 'rgb(244, 185, 95)', color: '#000' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">LSTM Stock Price Predictor</h3>
          <p style={{ marginBottom: 10 }} >
            Long Short-Term Memory model designed to predict the stock prices of NASDAQ companies. Developed using Python and Keras,
            hosted on Herkou.
          </p>
          <a href="https://github.com/SyedA5688/predictive-stock-price-model" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(244, 185, 95)', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(244, 185, 95)' }}
          date="August 2020"
          position={"right"}
          iconStyle={{ background: 'rgb(244, 185, 95)', color: '#000' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Autoencoder Anomaly Detection</h3>
          <p style={{ marginBottom: 10 }} >
            Machine learning model aimed at detecting anomalies in sensor data from environmental conservatories in 
            Seattle. Data is reconstructed by an encoder-decoder framework, and anomalies are detected  
            based off of MAE loss and chunk data evaluation.
          </p>
          <a href="https://github.com/SyedA5688/AWS-ML-Hackathon" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(135, 206, 235)', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(135, 206, 235)' }}
          date="June - July 2020"
          position={"left"}
          iconStyle={{ background: 'rgb(135, 206, 235)', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">NutrientView Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Mobile application using image recognition to log, track, and display consumed micronutrients. Developed using React Native/Expo, 
            IBM Watson image recognition, Azure bot service, and the Edamam Nutrition API.
          </p>
          <a href="https://github.com/SyedA5688/NutrientView" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(135, 206, 235)', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(135, 206, 235)' }}
          date="May - June 2020"
          position={"left"}
          iconStyle={{ background: 'rgb(135, 206, 235)', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">StormReady Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Hurricane awareness and tracking mobile application developed using React Native/Expo and the AerisWeather API. Includes informational
            pages and quizzes, landing points of previous hurricanes, and a location tracking system for hurricane alerts.
          </p>
          <a href="https://github.com/SyedA5688/StormReady" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(135, 206, 235)', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(135, 206, 235)' }}
          date="December 2019"
          position={"left"}
          iconStyle={{ background: 'rgb(135, 206, 235)', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">FinVisor Financial App</h3>
          <p style={{ marginBottom: 10 }} >
            Web application for income and expense tracking aimed at increasing personal financial awareness and responsibility.
            Developed using Python, Flask, and SQL Alchemy.
          </p>
          <a href="https://github.com/SyedA5688/FinVisor" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}