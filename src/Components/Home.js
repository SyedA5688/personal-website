import React from 'react';
import Grid from '@mui/material/Grid';
import portrait_no_bg from '../images/professional_portrait.png';
import githubIcon from '../images/GitHub-Mark-64px.png';
import linkedInIcon from '../images/linkedin.png';
import googleScholarIcon from '../images/google_scholar_icon.png';


export default function Home() {
  return (
    <Grid container className="HomeScreenContainer" >
      <Grid item xs={12} lg={6} className="DescColumn" >
        <div style={{ borderBottomWidth: 2, borderBottomColor: "grey", borderBottomStyle: "solid" }} >
          <p style={{ fontSize: 65, fontWeight: "bold", fontFamily: "Castoro" }} >Syed Asad Rizvi</p>
          <p>
            Computer Science undergraduate at the University of Houston and            
            undergraduate researcher at HULA.
          </p>
          <p>
            I'm interested in modeling real-world spatiotemporal and biomedical problems 
            with deep Graph Neural Networks.
          </p>
          <p>
            Click around to find out more about me, or check out one of my
            portfolios below:
          </p>
        </div>
        <div className="IconsContainer" >
          <a href="https://github.com/SyedA5688" target="_blank" rel="noreferrer" ><img src={githubIcon} alt="GitHub" height="50px" ></img></a>
          <a href="https://linkedin.com/in/syed-a-rizvi-01" target="_blank" rel="noreferrer" ><img src={linkedInIcon} alt="LinkedIn" height="50px" ></img></a>
          <a href="https://scholar.google.com/citations?user=2rhnnZ4AAAAJ" target="_blank" rel="noreferrer" ><img src={googleScholarIcon} alt="Google Scholar" height="50px" ></img></a>
        </div>
      </Grid>
      <Grid item xs={12} lg={6} className="ImageColumn" >
        <img src={portrait_no_bg} alt="Syed Rizvi" height="100%" ></img>
      </Grid>
    </Grid>
  )
}