import { TextField, Button, Container, Alert, Paper } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = {email}
        fetch('https://pure-springs-17814.herokuapp.com/users/admin', {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setSuccess(true)
            }
        })
        e.preventDefault();
    }
    return (
        <Paper style={{marginBottom:'500px'}} sx={{p:3}}>
        <Container>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{width:'50%', m:2}}
            type='email' 
            label="Email"
            onBlur={handleOnBlur} 
            variant="standard" /> <br />
            <Button type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert  severity="success">Admin added Successfully</Alert> }
            </Container>
            </Paper>
    );
};

export default MakeAdmin;