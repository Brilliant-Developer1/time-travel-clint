import { Typography, Grid, Container } from '@mui/material';
import React from 'react';
import { useEffect,useState } from 'react';
import WatchesCard from '../WatchesCard/WatchesCard';

const Watches = () => {
    const [watches, setWatches] = useState([]);

    useEffect( () => {
        fetch('https://pure-springs-17814.herokuapp.com/watches')
        .then(res => res.json())
        .then(data => setWatches(data))
    },[])
    return (
        <Container style={{marginTop:"120px"}} >
            <Typography sx={{mb:3}}  variant='h3'>
            Our Watch Collections
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                watches.map(watch => <WatchesCard
                    key={watch.id}
                    watch={watch}
                    ></WatchesCard>)
            }
            </Grid>   
        </Container>
    );
};

export default Watches;