import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const MyOrdersCard = ({myOrder,setMyOrders,myOrders}) => {

    // Delete a Order
    const handleDeleteOrder = id => {
        const proceed = window.confirm ('Are you sure, you want to delete this Order?');
        if(proceed){
            const url = `https://pure-springs-17814.herokuapp.com/myOrders/${id}`;
            fetch(url, {
            method:"DELETE"

        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert("Success fully deleted the User")
                const restOrders = myOrders.filter(order => order.order !== id); // to remove the Order from UI
                setMyOrders(restOrders)
              } 
            else {
                alert("No User to Delete")
              }
        })
        }
    }
    return (
        <Container>
            <Paper sx={{p:2,mt:1}}>
            <Grid container>
            <Grid item xl={12}>
            <Typography variant='h5'>
            Watch Name: {myOrder.orderName}
            </Typography>
            <Typography variant='h5'>
            Watch Model: {myOrder.order}
            </Typography>
            </Grid>
            <Grid item xl>
            <Button 
            style={{backgroundColor:'#f1c40f',color:'black'}}
            onClick={() =>handleDeleteOrder(myOrder.order)}>Cancel Order</Button>
            </Grid>
            </Grid>
            </Paper>
            
        </Container>
    );
};

export default MyOrdersCard;