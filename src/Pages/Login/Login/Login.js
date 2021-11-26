import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import login from '../../../images/login.png'
import { NavLink ,useLocation, useHistory  } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Box } from '@mui/system';


const Login = () => {
    const {user, loginUser, isLoading, authError,signinUsingGoogle} = useAuth();
    const [loginData, setLoginData] = useState()
    const location = useLocation();
    const history = useHistory();

    const handleGoogleLogin = () => {
        signinUsingGoogle(location, history)
    }
    const handleOnChange = e => {
       const field = e.target.name;
       const value = e.target.value;
       const newLoginData = {...loginData};
       newLoginData[field] = value;
       setLoginData(newLoginData)
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password,location, history)
        e.preventDefault();
    }

    return (
        <Box style={{marginTop:"120px"}}>
        <Container>
            
            <Grid container spacing={2}>
            
            <Grid item xs={12} md={6}>
            <img width='100%' src={login} alt="login" />
            </Grid>

                <Grid sx={{mt:8}} item xs={12} md={6}>
                <Typography variant='h5'>Login </Typography>
                    <form onSubmit={handleLogin}>
                    <TextField id="standard-basic"
                    sx={{width:"75%", m:1}} 
                    label="Email" type='email'
                    name='email'
                    onChange={handleOnChange}
                    variant="standard"
                    required/> <br />
                    <TextField id="standard-basic" 
                    sx={{width:"75%", m:1}} 
                    label="Password" variant="standard"
                    name='password'
                    onChange={handleOnChange}
                    type='password' autoComplete="current-password"
                    required/> <br />
                    <Button 
                    sx={{width:"55%", m:1}}
                    type='submit' variant='contained'>Login</Button>
                    <br />
                    <NavLink 
                    style={{textDecoration:'none'}}
                    to='/register'>
                    <Button variant='text'>New User ? please register</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert  severity="success">Successfully Logged-in</Alert> }
                    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>-----------Or-------------</p>
                    <h5>Login with</h5>
                    <Button onClick={handleGoogleLogin}>Google</Button>
                </Grid>
                
            </Grid>
        </Container>
        </Box>
    );
};

export default Login;