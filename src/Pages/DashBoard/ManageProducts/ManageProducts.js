import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ManageProductsCard from './ManageProductsCard';

const ManageProducts = () => {
    const [watches, setWatches] = React.useState([]);

    React.useEffect( () => {
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
                watches.map(watch => <ManageProductsCard
                    key={watch.id}
                    watch={watch}
                    setWatches={setWatches}
                    watches={watches}
                    ></ManageProductsCard>)
            }
            </Grid>   
        </Container>
    );
};

export default ManageProducts;