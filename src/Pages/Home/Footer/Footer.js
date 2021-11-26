import { Box } from '@mui/system';
import React from 'react';

import { Button, TextField, Typography, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box style={{
            backgroundColor:'#2c3e50',
            marginTop:'50px',
            padding:'20px',
            color:'white'
        }}>
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography  variant='h6'>
            Subscribe For Our offer
        </Typography>
        <TextField 
        sx={{m:2 }} id="outlined-basic" label="Your Email" variant="outlined" /> <br />
        <Button variant='contained'>Subscribe</Button>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant='h6'>About Us</Typography>
            <Box >
                <p>Time-Travel has successfully launched its name as synonym for online shopping In Bangladesh. We are offering complete solutions for online Watch Sales & Promotion.

                Our main objective is business growth by incorporating new thoughts in E-Promotion and Sales sector.
                
                We would like to promote International and National Brands all over the country. We are offering below services through our online solution</p>
            </Box>
        </Grid>
      </Grid>
        </Box>
    );
};

export default Footer;