import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ManageOrdersCard from './ManageOrdersCard';

const ManageOrders = () => {
    const [orders, setOrders] = React.useState([]);

    React.useEffect( () => {
        fetch('https://pure-springs-17814.herokuapp.com/myOrders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    return (
        <Container style={{maxWidth:'550px'}}>
            <Typography sx={{p:3}} variant='h4'>Manage All Orders</Typography>
            <Grid container>
            {
                orders.map(allorder => <ManageOrdersCard
                    key={allorder._id}
                    allorder={allorder}
                    ></ManageOrdersCard>)
            }
            </Grid>
        </Container>
    );
};

export default ManageOrders;