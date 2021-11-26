import { Container, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../../hooks/useAuth';

const AddProduct = () => {
    const { register, handleSubmit, reset} = useForm();
    const {user} = useAuth();

    //Sending Reviews Details to Server
    const onSubmit = data => {
        fetch('https://pure-springs-17814.herokuapp.com/watches', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId) {
                alert("You Product is Added")
                reset();
                
            }
        })
    }
    return (
        <Container>
            <Box style={{maxWidth:'400px', margin:'0 auto', marginBottom:'110px'}}>
            <Typography variant='h5' sx={{m:2}}>
            Hello: {user.displayName} <br />
            <small>Please Add your Product Here</small>
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>

            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="ID" 
            defaultValue=''
            {...register("id", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Product Name" 
            defaultValue=''
            {...register("name", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Price" 
            defaultValue=''
            {...register("price", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Gender" 
            defaultValue=''
            {...register("gender", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Stock" 
            defaultValue=''
            {...register("inStock", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Dial Color" 
            defaultValue=''
            {...register("dialColor", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Bracelet Color" 
            defaultValue=''
            {...register("braceletColor", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Details" 
            defaultValue=''
            {...register("details", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />
            <TextField 
            required
            id="standard-basic"
            type='text' 
            label="Image URL" 
            defaultValue=''
            {...register("img", { required: true })}
            sx={{m:1, width:'95%'}}
            variant="filled" /> <br />

            <Button variant='contained' type='submit' sx={{p:2}}>Add Product</Button>
            </form>
        </Box>
        </Container>
    );
};

export default AddProduct;