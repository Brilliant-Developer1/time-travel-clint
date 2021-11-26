import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, TableContainer, Paper, Table, TableBody, Button } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

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

const HomeWatchesCard = ({watch}) => {
    const {name,img,price,inStock,gender,dialColor,id } = watch
    return (
        <Grid sx={{mb:8}} item xs={2} sm={4} md={4}>
        <Card sx={{ maxWidth: 345 }}>

        <Link to={`/placeOrder/${id}`} style={{textDecoration:'none',color:"black"}}>
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
        </Link>

        <Link to={`/placeOrder/${id}`} style={{textDecoration:'none'}}>
          <Button sx={{p:2}}>Buy Now</Button>        
        </Link>
        </Card>
        </Grid>
    );
};

export default HomeWatchesCard;