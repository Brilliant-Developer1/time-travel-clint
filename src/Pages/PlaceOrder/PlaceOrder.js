import React, { useEffect, useState } from 'react';
import { Container, Grid, TableBody, TableContainer, Typography,tableCellClasses,TableCell, Table, Paper, TextField, Button } from '@mui/material';
import { useParams } from 'react-router';
import useAuth from './../../hooks/useAuth';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const PlaceOrder = () => {
  const { register, handleSubmit, reset} = useForm();
    const {id} = useParams();
    const [clock, setClock] = useState([]);
    const [watch, setWatch] = useState({});
    const {user} = useAuth();

    //Sending Orders Details to Server
    const onSubmit = data => {
      console.log(data);
      data.order = id;
      data.orderName = watch?.name;
      data.status = 'pending';
      fetch('https://pure-springs-17814.herokuapp.com/orders', {
          method:'POST',
          headers: {
              'content-type': 'application/json'
          },
          body:JSON.stringify(data)
      })
      .then(res => res.json())
      .then(result => {
          if(result.insertedId) {
              alert("You Order is placed")
              reset();
          }
      })
  }
    // Receive Watches data from server
    useEffect(() => {
        fetch('https://pure-springs-17814.herokuapp.com/watches')
        .then(res => res.json())
        .then(data => setClock(data))
    },[])

    //Finding specific watch from all watches.
    useEffect(() => {
        const foundWatch = clock.find(watche => watche.id == id)
            setWatch(foundWatch);
        } ,[clock, id, setWatch])
    return (
        <Container style={{marginTop:"120px"}}>
        <Grid container >
        <Grid item xs={12} md={6}>
          <img style={{
            objectFit: "cover",
            width: '100%',
            height: "550px",
          }} src={watch?.img} alt="watch" />
        </Grid>
        <Grid item xs={12} md={6}>

        <Container sx={{mt:8}}>
        <Typography gutterBottom variant="h4" component="div">
        {watch?.name}
        </Typography>
        <TableContainer component={Paper}>
        <Table sx={{  }} aria-label="customized table">
    <TableBody>
        <StyledTableRow>
          <StyledTableCell>
                <span style={{fontWeight:'bold'}}>Gender: </span> 
                {watch?.gender}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Watch Color: </span> 
                {watch?.dialColor }
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Bracelet Color: </span> 
                {watch?.braceletColor }
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Stock: </span> 
                {watch?.inStock}
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Details: </span> 
                {watch?.details}
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Price: </span> 
                ৳{watch?.price}
          </StyledTableCell>
        </StyledTableRow>

    </TableBody>
    </Table>
        </TableContainer>
        </Container>
        </Grid>
      </Grid>
      <Paper>
      <Grid container sx={{mt:5,p:2}}>
        <Grid item xs={12} md={6}>
        <img style={{
          paddingTop: '2px',
          borderRadius: '50%',
          margin: '15px',
          
        }} src={user.photoURL} alt="userimg" />
          <Typography variant='h4'>
           Hello <br /> {user?.displayName}
          </Typography>
          <Typography variant='p'>
           Email - {user?.email}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{mb:2}}>
          <Typography variant='h4'>
            Confirm Your Order.
          </Typography>
          <Typography variant='p'>
            Please fill the Form To Confirm Your Order.
          </Typography>
          </Box>
          
          <form onSubmit={handleSubmit(onSubmit)}>
          <TextField 
          required
          id="filled-basic" 
          label="Name" 
          defaultValue={user?.displayName}
          {...register("name")}
          sx={{width:"75%", m:1}}
          variant="filled" />

          <TextField 
          required
          id="filled-basic"
          type='email' 
          label="Email" 
          defaultValue={user?.email}
          {...register("email", { required: true })}
          sx={{width:"75%", m:1}}
          variant="filled" />

          <TextField 
          required
          id="filled-basic" 
          label="Number" 
          defaultValue='+0088'
          {...register("number")}
          sx={{width:"75%", m:1}}
          variant="filled" />

          <TextField 
          required
          id="filled-basic" 
          label="Address" 
          placeholder='Your address'
          {...register("address")}
          sx={{width:"75%", m:1}}
          variant="filled" /> <br />
          <Button type='submit' sx={{p:2}}>Buy Now</Button>        
          </form>
        
        </Grid>
      </Grid>
      </Paper>
        </Container>
    );
};

export default PlaceOrder;