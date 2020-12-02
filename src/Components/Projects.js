import React from 'react';
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
          contentStyle={{ background: 'rgb(100,149,237)', color: '#000', fontFamily: 'Castoro', borderWidth: 1, borderStyle: "solid", borderColor: "black" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(100,150,237)' }}
          date="November 2020"
          iconStyle={{ background: 'rgb(100,149,237)', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">Labelbox Custom Medical Image Annotation Interface</h3>
          <p>
            Developed a custom interface using ReactJS and the Labelbox Javascript API to allow for rapid grid label
            application on medical images.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(218,165,32)', color: '#000', fontFamily: 'Castoro', borderWidth: 1, borderStyle: "solid", borderColor: "black" }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(218,165,32)' }}
          date="August 2020"
          iconStyle={{ background: 'rgb(218,165,32)', color: '#000' }}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Autoencoder Anomaly Detection</h3>
          <p>
            Machine learning model aimed at detecting anomalies in sensor data from environmental conservatories in 
            Seattle. Network structure consists of a typical encoder-decoder framework with an evaluation function 
            that analyzes the data reconstruction.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}