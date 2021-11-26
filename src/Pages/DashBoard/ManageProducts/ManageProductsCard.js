import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, TableContainer, Paper, Table, TableBody, Button } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

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

const ManageProductsCard = ({watch,setWatches,watches}) => {
    const {name,img,price,inStock,gender,dialColor,id } = watch;

    const handleDelete = (id) => {
        const proceed = window.confirm ('Are you sure, you want to delete this Product?');
        if(proceed){
            const url = `https://pure-springs-17814.herokuapp.com/watches/${id}`;
            fetch(url, {
            method:"DELETE"

        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                alert("Success fully deleted the Product")
                const restProducts = watches.filter(watch => watch.id !== id); // to remove the user from UI
                setWatches(restProducts)
              } 
            else {
                alert("No Product to Delete")
              }
        })
        }
    }
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
        component="img"
        height="190"
        image={img}
        alt="green iguana"
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <TableContainer component={Paper}>
            <Table sx={{  }} aria-label="customized table">
        <TableBody>
            <StyledTableRow>
              <StyledTableCell   >
                    <span style={{fontWeight:'bold'}}>Gender: </span> 
                    {gender}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell   >
                    <span style={{fontWeight:'bold'}}>Watch Color: </span> 
                    {dialColor }
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell   >
                    <span style={{fontWeight:'bold'}}>Stock: </span> 
                    {inStock}
              </StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell   >
                    <span style={{fontWeight:'bold'}}>Price: </span> 
                    ৳{price}
              </StyledTableCell>
            </StyledTableRow>

        </TableBody>
        </Table>
            </TableContainer>
        </CardContent>
        </CardActionArea>

          <Button style={{backgroundColor:'#ff7979',color:'white'}}
           onClick={() => handleDelete(id)}
           sx={{p:2,mb:2}}>Delete</Button>        
        </Card>
        </Grid>
    );
};

export default ManageProductsCard;