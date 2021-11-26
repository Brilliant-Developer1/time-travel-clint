import { Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import obaku from '../../../images/obaku.jpg'
import casio from '../../../images/casio.jpg'
import titan from '../../../images/titan.jpg'
import rolax from '../../../images/rolax.jpg'

const OurBrands = () => {
    return (
        <Container sx={{mb:5}}>
        <Paper sx={{p:4}}>
        <Typography variant='h4'>Our Brands</Typography>
            <Grid container>
                <Grid item xs>
                    <img style={{width:'100%'}} src={obaku} alt="obaku" />
                </Grid>
                <Grid item xs>
                    <img style={{width:'100%'}} src={casio} alt="obaku" />
                </Grid>
                <Grid item xs>
                    <img style={{width:'100%'}} src={titan} alt="obaku" />
                </Grid>
                <Grid item xs>
                    <img style={{width:'100%'}} src={rolax} alt="obaku" />
                </Grid>
            </Grid>
        </Paper>
        </Container>
    );
};

export default OurBrands;