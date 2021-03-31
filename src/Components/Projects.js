import React from 'react';
import { Button } from 'react-bootstrap';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import SearchIcon from '@material-ui/icons/Search';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { BiBot, BiLineChart } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { IoThunderstormOutline } from 'react-icons/io5';
import botathon_certificate_img from '../images/projects/HP_botathon_certificate.png';
import labelbox_interface_img from '../images/projects/labelbox_interface.png';
import stock_graph_img from '../images/projects/stock_graph.png';
import autoencoder_reconstruction_img from '../images/projects/time_series_reconstruction.png';
import nutrientview_screens_img from '../images/projects/nutrientview_screens.png';
import stormready_screens_img from '../images/projects/stormready_screens.png';
import finvisor_home_img from '../images/projects/finvisor_home.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Projects() {
  return (
    <div className="ProjectScreenContainer" >
      <div style={{ borderBottomWidth: 2, borderBottomStyle: "solid", borderBottomColor: "#424242", width: "75vw" }} >
        <h1>Independent Projects</h1>
        <div style={{ width: '100%', marginTop: '5vh' , display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
          <h3 style={{ fontFamily: 'Castoro', marginLeft: '10vw' }} >Mobile and Web Design</h3>
          <h3 style={{ fontFamily: 'Castoro', marginRight: '12vw' }} >Machine Learning</h3>
        </div>
      </div>
      
      <VerticalTimeline className="vertical-timeline-custom-line" >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'khaki', color: '#000', fontFamily: 'Castoro', borderWidth: 4, borderStyle: "solid", borderColor: "#424242" }}
          contentArrowStyle={{ borderRight: '10px solid  #424242' }}
          date="September 2020"
          position={"right"}
          iconStyle={{ background: 'khaki', color: '#000' }}
          icon={<BiBot />}
        >
          <h3 className="vertical-timeline-element-title">AWS Lex Bot Generator</h3>
          <p style={{ marginBottom: 10 }} >
            AWS pipeline for generating AWS Lex AI-powered chatbots from inputed configuration files. 
            Files are sent to an AWS S3 bucket which triggers lambda functions that start bot generation 
            process. Placed 1st in HP and AWS Botathon.
          </p>
          <img src={botathon_certificate_img} alt="HP Botathon Certificate" width="80%" className="ProjectImg" ></img>
          <p>
            Developed using AWS Lex, Lambda, DynamoDB, S3, and React. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/AWS-bot-generation-pipeline" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 4, borderStyle: "solid", borderColor: "#424242" }}
          contentArrowStyle={{ borderRight: '10px solid  #424242' }}
          date="November 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<CropOriginalIcon />}
        >
          <h3 className="vertical-timeline-element-title">Labelbox Custom Medical Image Annotation Interface</h3>
          <p style={{ marginBottom: 10 }} >
            Custom image annotation interface allowing for rapid grid label application on medical images. 
            Labels are saved to Labelbox system through integration with Javascript API.
          </p>
          <img src={labelbox_interface_img} alt="HP Botathon Certificate" width="80%" className="ProjectImg" ></img>
          <p>
            Developed using ReactJS and the Labelbox Javascript API. <br/><br/>
          </p>
          {/* <a href="https://github.com/SyedA5688/labelbox-custom-interface" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a> */}
          <p>This project is private for the time being.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'khaki', color: '#000', fontFamily: 'Castoro', borderWidth: 4, borderStyle: "solid", borderColor: "#424242" }}
          contentArrowStyle={{ borderRight: '10px solid #424242' }}
          date="September 2020"
          position={"right"}
          iconStyle={{ background: 'khaki', color: '#000' }}
          icon={<BiLineChart />}
        >
          <h3 className="vertical-timeline-element-title">LSTM Stock Price Predictor</h3>
          <p style={{ marginBottom: 10 }} >
            Long Short-Term Memory model designed to predict the stock prices of NASDAQ companies. Network receives 
            stock information from previous month and outputs predicted opening price for the next day.
          </p>
          <img src={stock_graph_img} alt="HP Botathon Certificate" width="80%" className="ProjectImg" ></img>
          <p>
            Developed using Python and Keras, hosted on Herkou. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/HackRice-stock-prediction" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'khaki', color: '#000', fontFamily: 'Castoro', borderWidth: 4, borderStyle: "solid", borderColor: "#424242" }}
          contentArrowStyle={{ borderRight: '10px solid #424242' }}
          date="August 2020"
          position={"right"}
          iconStyle={{ background: 'khaki', color: '#000' }}
          icon={<SearchIcon />}
        >
          <h3 className="vertical-timeline-element-title">Autoencoder Anomaly Detection</h3>
          <p style={{ marginBottom: 10 }} >
            Machine learning model aimed at detecting anomalies in sensor data from environmental conservatories in 
            Seattle. Data is reconstructed by an autoencoder network and anomalies are then detected based off MAE 
            loss and segment analysis.
          </p>
          <img src={autoencoder_reconstruction_img} alt="HP Botathon Certificate" width="80%" className="ProjectImg" ></img>
          <p>
            Developed using AWS Sagemaker and Jupyter Notebooks. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/AWS-ML-Hackathon" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 4, borderStyle: "solid", borderColor: "#424242" }}
          contentArrowStyle={{ borderRight: '10px solid  #424242' }}
          date="June - July 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<AiOutlineCamera />}
        >
          <h3 className="vertical-timeline-element-title">NutrientView Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Mobile application using image recognition and nutritional APIs to log, track, and display 
            consumed micronutrients. Previous nutrient profiles available in calendar view page through 
            integration with Firebase database services.
          </p>
          <img src={nutrientview_screens_img} alt="HP Botathon Certificate" width="80%" className="ProjectImg" ></img>
          <p>
            Developed using React Native/Expo, IBM Watson image recognition, Azure bot service, and the 
            Edamam Nutrition API. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/NutrientView" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#cfe8ff', color: '#000', fontFamily: 'Castoro', borderWidth: 4, borderStyle: "solid", borderColor: "#424242" }}
          contentArrowStyle={{ borderRight: '10px solid  #424242' }}
          date="May - June 2020"
          position={"left"}
          iconStyle={{ background: '#cfe8ff', color: '#000' }}
          icon={<IoThunderstormOutline />}
        >
          <h3 className="vertical-timeline-element-title">StormReady Mobile App</h3>
          <p style={{ marginBottom: 10 }} >
            Hurricane awareness and preparation mobile application. Includes hurricane location tracking, 
            push notifications for alerts, informational quizzes, and locations of previous hurricane 
            landings.
          </p>
          <img src={stormready_screens_img} alt="HP Botathon Certificate" width="80%" className="ProjectImg" ></img>
          <p>
            Developed using React Native/Expo and the AerisWeather API. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/StormReady" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#afe0af', color: '#000', fontFamily: 'Castoro', borderWidth: 4, borderStyle: "solid", borderColor: "#424242" }}
          contentArrowStyle={{ borderRight: '10px solid  #424242' }}
          date="December 2019"
          position={"left"}
          iconStyle={{ background: '#afe0af', color: '#000' }}
          icon={<LocalAtmIcon />}
        >
          <h3 className="vertical-timeline-element-title">FinVisor Financial App</h3>
          <p style={{ marginBottom: 10 }} >
            Web application for income and expense tracking aimed at increasing personal financial awareness 
            and responsibility. Integrated with an SQL database to record personal transaction history of users.
          </p>
          <img src={finvisor_home_img} alt="HP Botathon Certificate" width="80%" className="ProjectImg" ></img>
          <p>
            Developed using Python, Flask, and SQL Alchemy. <br/><br/>
          </p>
          <a href="https://github.com/SyedA5688/FinVisor" target="_blank" rel="noreferrer" ><Button variant="outline-dark">View Project</Button></a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}