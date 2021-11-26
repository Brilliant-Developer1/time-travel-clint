import { Container, Paper, Typography } from '@mui/material';
import React from 'react';
import Reviews from './Reviews';

const ReviewsData = () => {
    const [reviews, setReviews] = React.useState([]);
    React.useEffect( () => {
        fetch('https://pure-springs-17814.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    
    return (
        <Container>
        <Paper>
        
        </Paper>
            <Typography variant='h4'>
            What Customers says About us
            </Typography>

            {
                reviews.map(review => <Reviews
                    key={review._id}
                    reviews={review}
                    ></Reviews>)  
            }
        </Container>
    );
};

export default ReviewsData;