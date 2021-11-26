import { Typography, Grid, Container } from '@mui/material';
import React from 'react';
import { useEffect,useState } from 'react';
import HomeWatchesCard from './../HomeWatchesCard/HomeWatchesCard';

const HomeWatches = () => {
    const [watches, setWatches] = useState([]);
    useEffect( () => {
        fetch('https://pure-springs-17814.herokuapp.com/watches')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    return (
        <Container sx={{mt:4}}>
            <Typography sx={{mb:3}}  variant='h4'>
            Our Watch Collections
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{
watches.filter((item , index) => index < 6).map((watch) => <HomeWatchesCard
                    key={watch.id}
                    watch={watch}
                    ></HomeWatchesCard>
                )
            }
            </Grid>   
        </Container>
    );
};

export default HomeWatches;