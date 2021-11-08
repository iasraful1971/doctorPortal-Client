import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import treatemnet from '../../../../images/treatment.png';


const Treatment = () => {
    return (
        <Container sx={{ flexGrow: 1 , my:5 }}>
        <Grid container spacing={2} sx={{display:'flex' ,alignItems:'center'}}>
          <Grid item xs={12} md={6}>
            <img style={{width:'450px' , objectFit:'cover'}} src={treatemnet} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{textAlign:'left'}}>
          <Typography variant="h5" component="h2">
           Exceptional Dental Care <br /> on Your Terms
         </Typography>
          <Typography variant="caption" sx={{fontSize:'15px'}} component="h2">
          Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.
         </Typography>
         <br />
          <Typography variant="caption" sx={{fontSize:'15px'}} component="h2">
          The Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.the practice of keeping the mouth and teeth clean in order.
         </Typography>
         <Button sx={{margin:'20px 0'}} variant="contained">Learn more</Button>

          </Grid>
          
        </Grid>
      </Container>
    );
};

export default Treatment;