import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import morphset_diagram_img from '../images/research/MorphSet_diagram.png';
import hdgan_diagram_img from '../images/research/hdgan_fig1.png';
import dcsage_diagram_img from '../images/research/DCSAGE_Architecture_draft6.png';
import ampnet_diagram_img from '../images/research/ampnet_operator_diagram.png';
import lrclr_pipeline_img from '../images/research/LRCLR_pipeline_diagram_figure.png';

export default function Research() {
  return (
    <Grid container className="ResearchPageContainer" >
      <Grid container item xs={12} md={6} lg={4} className="ResearchColumn" >
        <Card sx={{ mr: 2, ml: 2, maxHeight: '80vh' }} >
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
      </Grid>

      <Grid container item xs={12} md={6} lg={4} className="ResearchColumn" >
        <Card sx={{ mr: 2, ml: 2, maxHeight: '80vh' }}>
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
              labels on medical imaging datasets. Existing frameworks, however, struggle to 
              scale to high-resolution medical images datasets. In this paper, 
              we extend upon the DatasetGAN semi-supervised image generation 
              and segmentation framework, making improvements to the generative backbone 
              and latent feature usage of the framework. We propose Histopathology 
              DatasetGAN, a more computationally efficient framework scalable to medical 
              image datasets. 
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://arxiv.org/pdf/2207.02712.pdf" target="_blank" rel="noreferrer" ><Button size="Small" >Paper</Button></a>
            <a href="https://github.com/SyedA5688/HistopathologyDatasetGAN" target="_blank" rel="noreferrer" ><Button size="Small" >Code</Button></a>
          </CardActions>
        </Card>
      </Grid>

      <Grid container item xs={12} md={6} lg={4} className="ResearchColumn" >
        <Card sx={{ mr: 2, ml: 2, maxHeight: '80vh' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DCSAGE: Deep Learning-Derived Optimal Aviation Strategies to Control Pandemics
            </Typography>
            
            <CardMedia
              component="img"
              height="140"
              image={dcsage_diagram_img}
              alt="DCSAGE architecture diagram"
              style={{ marginTop: '5px', marginBottom: '5px' }}
            />

            <Typography variant="body2" color="text.secondary">
              The COVID-19 pandemic has affected countries around the world, motivating 
              tools for forecasting infection trends and the effects of governmental 
              interventions. In this work, we study the effect of international flights 
              on global pandemic dynamics. We propose DCSAGE, a spatiotemporal Graph 
              Neural Network architecture well-suited for dynamically changing 
              edge features. We also do sensitivity analysis to study the influence of 
              flights on infection trends, and explore possible flight reduction 
              strategies for controlling the pandemic.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://arxiv.org/pdf/2210.10888.pdf" target="_blank" rel="noreferrer" ><Button size="Small" >Paper</Button></a>
            {/* <a href="" target="_blank" rel="noreferrer" ><Button size="Small" >Code</Button></a> */}
          </CardActions>
        </Card>
      </Grid>

      <Grid container item xs={12} md={6} lg={4} className="ResearchColumn" >
        <Card sx={{ mr: 2, ml: 2, maxHeight: '80vh' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              AMPNet: Attention as Message Passing for Graph Neural Networks
            </Typography>
            
            <CardMedia
              component="img"
              height="140"
              image={ampnet_diagram_img}
              alt="AMPNet architecture diagram"
              style={{ marginTop: '5px', marginBottom: '5px' }}
            />

            <Typography variant="body2" color="text.secondary">
              Feature-level interactions carry important information for understanding 
              interactions between different nodes in network-structured data. Current 
              explainability frameworks, however, are limited in their ability to uncover
              feature-level interactions across nodes. In this work, we propose AMPNet, 
              a general Graph Neural Network message-passing framework for contextualizing
              feature-level interactions between nodes. We evaluate AMPNet on several 
              benchmark and real-world datasets, and test its ability to find meaningful
              feature-level interactions.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://arxiv.org/pdf/2210.09475.pdf" target="_blank" rel="noreferrer" ><Button size="Small" >Paper</Button></a>
            {/* <a href="" target="_blank" rel="noreferrer" ><Button size="Small" >Code</Button></a> */}
          </CardActions>
        </Card>
      </Grid>

      <Grid container item xs={12} md={6} lg={4} className="ResearchColumn" >
        <Card sx={{ mr: 2, ml: 2, maxHeight: '80vh' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Local Contrastive Learning for Medical Image Recognition
            </Typography>
            
            <CardMedia
              component="img"
              height="140"
              image={lrclr_pipeline_img}
              alt="LRCLR pipeline diagram"
              style={{ marginTop: '5px', marginBottom: '5px' }}
            />

            <Typography variant="body2" color="text.secondary">
              Existing self-supervised frameworks for radiographic image analysis struggle 
              to distinguish subtle differences caused by pathologies in local image 
              regions of chest radiographs. Additionally, many frameworks do not provide 
              interpretation between image regions and text, making it difficult for 
              radiologists to assess predictions. In this work, we propose Local Region
              Contrastive Learning (LRCLR), a finetuning framework that adds layers to 
              pretrained models for significant image region selection as well as 
              cross-modality interaction.
            </Typography>
          </CardContent>
          <CardActions>
            <a href="https://arxiv.org/pdf/2303.14153.pdf" target="_blank" rel="noreferrer" ><Button size="Small" >Paper</Button></a>
            {/* <a href="" target="_blank" rel="noreferrer" ><Button size="Small" >Code</Button></a> */}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}