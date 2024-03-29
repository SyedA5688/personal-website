import React from 'react';
import Grid from '@mui/material/Grid';
import portrait from '../images/P66_headshot.jpg'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';


export default function About() {
  return (
    <Grid container className="AboutPageContainer" >
      <Grid item xs={12} lg={4} className="AboutImgColumn" >
        <img src={portrait} alt="Portrait" height="80%" className="AboutImg" ></img>
      </Grid>
      <Grid item xs={12} lg={8} className="AboutColumn" >
        <h1>About Me</h1>
        <p>
          I am a first year PhD student in
          the <a href="https://cpsc.yale.edu/" target="_blank" rel="noreferrer" >Department of Computer Science</a> at <a href="https://www.yale.edu/" target="_blank" rel="noreferrer" >Yale University</a>, 
          advised by Prof. <a href="https://medicine.yale.edu/profile/david_vandijk/" target="_blank" 
          rel="noreferrer" >David van Dijk</a>. 
          I'm interested in applying Large Language Models (LLMs) and Graph Neural Networks (GNNs)
          to real-world scientific problems, particularly in biomedical applications such as single-cell 
          genomics. My prior research work includes medical image segmentation using Convolutional Neural Networks (CNNs), as well as spatiotemporal forecasting using GNNs.
        </p>
        <p>
          In the past, I have had the fortune of working as an undergraduate research student 
          at the University of Houston, Houston Methodist, and Rice University. For more 
          information about my previous work, please visit
          the <a href="https://syedarizvi.com/research" rel="noreferrer" >Research</a> tab.
        </p>
        <h1>Contact Information</h1>
        <p>
          Name: Syed Asad Rizvi <br/>
          Inquiries: syed [dot] rizvi [at] yale [dot] edu <br/>
          Location: New Haven, CT
        </p>
      </Grid>

      <Grid item xs={12} className="TimelineContainer" >
        <div style={{ borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: "black", width: "100%", display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
          <h1>Activities Timeline</h1>
          <div style={{ marginLeft: '2vw', marginRight: '10px', display: "flex", flexDirection: "row" }} >
            <div>
              <p style={{ margin: 0, padding: 0, color: '#1976D2', fontWeight: 'bold' }} >Deep Learning, Data Science</p>
              <p style={{ margin: 0, padding: 0, color: '#9C27B0', fontWeight: 'bold' }} >Web Design, Cloud Services, Other</p>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '15vh' }} >
          <Timeline>
            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Submitted Local Contrastive Learning project to AMIA 2023 conference.
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  March 2023
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">December 2022</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Histopathology DatasetGAN research project accepted to 2022 IEEE Signal Processing 
                  in Medicine and Biology conference.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Joined the van Dijk Lab at Yale University as a visiting research student.
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  June 2022
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">May - August 2022</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Amazon internship in Austin, TX.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Joined Houston Methodist as a undergraduate research student working on spatiotemporal Graph 
                  Neural Networks and explainability frameworks for COVID-19 forecasting.
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  December 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">September 2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Coauthored research publication proposing CNN architectures for case-level classification 
                  in renal histopathology. Paper accepted to MICCAI. 
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Completed the IBM Data Science Specialization on Coursera covering SQL querying as well as data 
                  visualization, processing, and analysis using machine learning.
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  August 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>
            
            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">May - July 2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Information Technology internship at Phillips 66. Delivered a Natural Language Processing 
                  project for document cognition and presented project to IT leadership and Data Science team.
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Data Analyst internship. Worked remotely under the mentorshop of Dr. Syed Abdul Shabbir at 
                  Taipei Medical University (TMU) to process and analyze health informatics datasets.
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  March 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">March 2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Delivered oral abstract for the MorphSet research project to over 90 medical professionals at the 
                  AI in Nephropathology Workshop in Amsterdam
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Completed the Machine Learning certification offered by Stanford University on Coursera
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  February 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">January 2021</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Delivered presentation on custom labeling schemes using LabelBox to AI group at the University
                  of Buffalo
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Competed in the HP and AWS Botathon Competition, team placed first overall
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  January 2021
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">November 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Developed image annotation interfaces for fine-grained label application in medical
                  images on LabelBox platform
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Delivered presentation on IT candidate profile development in a professional development
                  workshop hosted by the Management Information Systems Student Organization (MISSO) at UH
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  October 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">September 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Joined HULA Computer Vision laboratory as a deep learning research assistant
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Competed in the AWS and NVIDIA Environmental Hackathon. Autoencoder project placed 3rd
                  overall, awarded $3000 prize
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="primary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  August 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">July 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Developed the NutrientView mobile app for nutrient tracking and progress visualizations
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Developed the StormReady mobile app for hurricane awareness and alerts 
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  June 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">January 2020</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Joined the Management Information Systems Student Organization (MISSO)
                </p>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-end' }} >
                  Developed the FinVisor financial awareness web application after attending HackTX 2019
                </p>
              </TimelineContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineOppositeContent>
                <Typography color="textSecondary" style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  January 2020
                </Typography>
              </TimelineOppositeContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent>
                <Typography color="textSecondary">September 2019</Typography>
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot color="secondary" /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                <p style={{ fontSize: 18, display: 'flex', flexDirection: 'row', justifyContent:'flex-start' }} >
                  Joined CougarCS computer science student organization
                </p>
              </TimelineContent>
            </TimelineItem>

          </Timeline>
        </div>
      </Grid>
    </Grid>
  )
}