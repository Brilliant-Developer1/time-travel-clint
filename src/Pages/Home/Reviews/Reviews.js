import { Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Reviews = ({reviews}) => {
    const {name, review,rating} = reviews;
    return (
        <Paper sx={{ p:2}} style={{maxWidth:'730px',margin:'0 auto', marginTop:'15px'}}>
            <Typography variant='h5'>
            {name}
            </Typography>
            <Typography variant='p'>
            {review}
            </Typography>
            <Box>
            <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={rating} readOnly />
            </Box>
        </Paper>
    );
};

export default Reviews;