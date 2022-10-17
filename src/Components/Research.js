import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import morphset_diagram_img from '../images/research/MorphSet_diagram.png';
import hdgan_diagram_img from '../images/research/hdgan_fig1.png';

export default function Research() {
  return (
    <div className="ResearchScreenContainer" >
      <Card sx={{ maxWidth: 345, mr: 2, ml: 2 }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MorphSet: Improving Renal Histopathology Case
            Assessment Through Learned Prognostic Vectors
          </Typography>
          
          <CardMedia
            component="img"
            height="140"
            image={morphset_diagram_img}
            alt="morph set architecture diagram"
            style={{ marginTop: '5px', marginBottom: '5px' }}
          />

          <Typography variant="body2" color="text.secondary">
            Data scarcity and interobserver disagreement among pathologists are significant 
            challenges facing deep learning efforts within histopathology. In this paper we 
            propose two attention-based, set-input CNN architectures for case-level assessment 
            of histopathological images. These architectures bypass the need for expensive 
            fine-grained image annotation by nephropathologists, and attempts to learn
            embeddings of important features in sets of images taken from patients in order 
            to make classifications.  
          </Typography>
        </CardContent>
        <CardActions>
          <a href="https://link.springer.com/chapter/10.1007/978-3-030-87237-3_31" target="_blank" rel="noreferrer" ><Button size="Small" >Paper</Button></a>
          <a href="https://github.com/pcicales/MICCAI_2021_aglom" target="_blank" rel="noreferrer" ><Button size="Small" >Code</Button></a>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, mr: 2, ml: 2 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Histopathology DatasetGAN: Synthesizing Large-Resolution Histopathology Datasets
          </Typography>
          
          <CardMedia
            component="img"
            height="140"
            image={hdgan_diagram_img}
            alt="histopathology datasetgan architecture diagram"
            style={{ marginTop: '5px', marginBottom: '5px' }}
          />

          <Typography variant="body2" color="text.secondary">
            Semi-supervised frameworks aim to reduce the burden of obtaining expensive 
            labels on medical image datasets, however existing frameworks struggle to 
            scale to high-resolution medical images and scarce datasets. In this paper, 
            we extend upon the DatasetGAN semi-supervised image generation 
            and segmentation framework, making improvements to the generative backbone 
            and computational requirements of the framework which allow the method to 
            scale better to high-resolution, scarce medical data. 
          </Typography>
        </CardContent>
        <CardActions>
          <a href="https://arxiv.org/pdf/2207.02712.pdf" target="_blank" rel="noreferrer" ><Button size="Small" >Paper</Button></a>
          <a href="https://github.com/SyedA5688/HistopathologyDatasetGAN" target="_blank" rel="noreferrer" ><Button size="Small" >Code</Button></a>
        </CardActions>
      </Card>
    </div>
  )
}