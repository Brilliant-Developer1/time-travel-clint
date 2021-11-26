import { Box } from '@mui/system';
import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import useAuth from './../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset} = useForm();
    const {user} = useAuth();
    /* const handleRating = e => {
        const rating = e.target.name;
        const value = e.target.value;
        console.log(value);
        if(rating > 5) {
            alert('Please Rating Must be between 0-5')
        }
        else if (rating < 0){
            alert('Please Rating Must be between 0-5')
        }

    } */

    //Sending Reviews Details to Server
    const onSubmit = data => {
        data.name = user.displayName;
        if (data.rating > 5 || data.rating < 0){
           return alert('Please Rating Must be between 0-5')
        }
        fetch('https://pure-springs-17814.herokuapp.com/reviews', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
                alert("You Review is Added")
                reset();
                window.location.reload()
            }
        })
    }
    
    return (
        <Box style={{maxWidth:'600px', margin:'0 auto', marginBottom:'110px'}}>
            <Typography variant='h5'>
            Hello: {user.displayName} <br />
            <small>Please Add your Review Here</small>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>

            <TextField 
            id="filled-number"
            type='number' 
            label="Rating" 
            name='rating'
            {...register("rating")}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />

            <TextField 
            required
            id="filled-multiline-static"
            multiline
            rows={4}
            type='text' 
            label="Review" 
            defaultValue=''
            {...register("review", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />

            <Button variant='contained' type='submit' sx={{p:2}}>Add Review</Button>
            </form>
        </Box>
    );
};

export default AddReview;