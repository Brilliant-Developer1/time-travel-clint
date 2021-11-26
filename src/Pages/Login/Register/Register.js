import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React,{useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../images/register.png'
import useAuth from './../../../hooks/useAuth';


const Register = () => {
    const {user, registerUser, isLoading,authError} = useAuth()

    const history = useHistory();

    const [loginData, setLoginData] = useState()
    const handleOnBlur = e => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...loginData};
       newLoginData[field] = value;
       setLoginData(newLoginData)
    }
    const handleLogin = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password Did not match')
        }
        registerUser(loginData.name,loginData.email, loginData.password,history)
        e.preventDefault();
    }
    return (
        <Container style={{marginTop:"120px"}}>
            
            <Grid container spacing={2}>
            
                <Grid sx={{mt:8}} item xs={12} md={6}>
                <Typography variant='h5'>Register </Typography>
                    {!isLoading && // isLoadong jodi na hoy tahole eta dekhabe
                    <form onSubmit={handleLogin}>
                    <TextField id="standard-basic"
                    sx={{width:"75%", m:1}} 
                    label="Name" type='text'
                    name='name'
                    onChange={handleOnBlur}
                    variant="standard"
                    autoComplete="name"
                    required/> 

                    <TextField id="standard-basic"
                    sx={{width:"75%", m:1}} 
                    label="Email" type='email'
                    name='email'
                    onChange={handleOnBlur}
                    variant="standard"
                    autoComplete="email"
                    required/> 

                    <TextField id="standard-basic" 
                    sx={{width:"75%", m:1}} 
                    label="Password" variant="standard"
                    name='password'
                    onChange={handleOnBlur}
                    type='password' autoComplete="current-password"
                    required/> 

                    <TextField id="standard-basic" 
                    sx={{width:"75%", m:1}} 
                    label="Re-Type Password" variant="standard"
                    name='password2'
                    onChange={handleOnBlur}
                    type='password' autoComplete="current-password"
                    required/> <br />

                    <Button 
                    sx={{width:"55%", m:1}}
                    type='submit' variant='contained'>Register</Button>
                    <br />
                    <NavLink 
                    style={{textDecoration:'none'}}
                    to='/login'>
                    <Button variant='text'>Already Registered? please Login</Button>
                    </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert  severity="success">Successfully registered</Alert> }
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={login} alt="login" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;