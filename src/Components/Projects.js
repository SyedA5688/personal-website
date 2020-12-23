import React from 'react';
import { Button } from 'react-bootstrap';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import EcoIcon from '@material-ui/icons/Eco';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Projects() {
  return (
    <div className="ProjectScreenContainer" >
      <div style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "black", width: "75vw" }} >
        <h1>Independent Projects</h1>
        <div style={{ width: '100%', marginTop: '5vh' , display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
          <h3 style={{ fontFamily: 'Castoro', marginLeft: '10vw' }} >Mobile and Web Design</h3>
          <h3 style={{ fontFamily: 'Castoro', marginRight: '12vw' }} >Machine Learning</h3>
        </div>
      </div>
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #cfe8ff' }}
          date="November 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<CropOriginalIcon />}
        >
          <h3 className="vertical-timeline-element-title">Labelbox Custom Medical Image Annotation Interface</h3>
          <p style={{ marginBottom: 10 }} >
            Custom image annotation interface allowing for rapid grid label application on medical images. <br/>
            Developed using ReactJS and the Labelbox Javascript API
          </p>
          <a href="https://github.com/SyedA5688/labelbox-custom-interface" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#face8c', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #face8c' }}
          date="September 2020"
          position={"right"}
          iconStyle={{ background: '#face8c', color: '#000' }}
          icon={<TrendingUpIcon />}
        >
          <h3 className="vertical-timeline-element-title">LSTM Stock Price Predictor</h3>
          <p style={{ marginBottom: 10 }} >
            Long Short-Term Memory model designed to predict the stock prices of NASDAQ companies. <br/> 
            Developed using Python and Keras, hosted on Herkou.
          </p>
          <a href="https://github.com/SyedA5688/predictive-stock-price-model" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#face8c', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #face8c' }}
          date="August 2020"
          position={"right"}
          iconStyle={{ background: '#face8c', color: '#000' }}
          icon={<EcoIcon />}
        >
          <h3 className="vertical-timeline-element-title">Autoencoder Anomaly Detection</h3>
          <p style={{ marginBottom: 10 }} >
            Machine learning model aimed at detecting anomalies in sensor data from environmental conservatories in 
            Seattle. Data is reconstructed by an autoencoder network and anomalies are then detected  
            based off MAE loss and segment evaluation. <br/>
            Developed using AWS Sagemaker and Jupyter Notebooks.
          </p>
          <a href="https://github.com/SyedA5688/AWS-ML-Hackathon" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #cfe8ff' }}
          date="June - July 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<PhotoCameraIcon />}
        >
          <h3 className="vertical-timeline-element-title">NutrientView Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Mobile application using image recognition to log, track, and display consumed micronutrients. <br/>
            Developed using React Native/Expo, IBM Watson image recognition, Azure bot service, and the 
            Edamam Nutrition API.
          </p>
          <a href="https://github.com/SyedA5688/NutrientView" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #cfe8ff' }}
          date="May - June 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<CloudQueueIcon />}
        >
          <h3 className="vertical-timeline-element-title">StormReady Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Hurricane awareness and preparation mobile application. Includes informational pages and quizzes, landing points of previous hurricanes, 
            and a location tracking system for hurricane alerts. <br/>
            Developed using React Native/Expo and the AerisWeather API.
          </p>
          <a href="https://github.com/SyedA5688/StormReady" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#afe0af', color: '#000', fontFamily: 'Castoro', borderWidth: 5, borderStyle: "solid", borderColor: "white" }}
          contentArrowStyle={{ borderRight: '7px solid  #afe0af' }}
          date="December 2019"
          position={"left"}
          iconStyle={{ background: '#afe0af', color: '#000' }}
          icon={<LocalAtmIcon />}
        >
          <h3 className="vertical-timeline-element-title">FinVisor Financial App</h3>
          <p style={{ marginBottom: 10 }} >
            Web application for income and expense tracking aimed at increasing personal financial awareness and responsibility. <br/>
            Developed using Python, Flask, and SQL Alchemy.
          </p>
          <a href="https://github.com/SyedA5688/FinVisor" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}