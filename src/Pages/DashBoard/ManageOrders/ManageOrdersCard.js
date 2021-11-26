import { Button, Paper, Table, TableBody, TableContainer } from '@mui/material';
import React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow  from '@mui/material/TableRow';


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

const ManageOrdersCard = ({allorder}) => {
    const {name,email,number,address,order,orderName,status,_id} = allorder

    // Update status to DB
    const updateStatus = (id) => { 
        console.log(id);
        fetch(`https://pure-springs-17814.herokuapp.com/myOrders/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(
          alert('Order Is Approved'),
          window.location.reload())
    }
    return (
        
        <TableContainer style={{margin:'10px'}} component={Paper}>
        <Table sx={{  }} aria-label="customized table">
        <TableBody>
        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Customers Name: </span> 
                {name}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Customers Email: </span> 
                {email}
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Phone: </span> 
                {number}
          </StyledTableCell>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Address: </span> 
                {address}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Order No: </span> 
                {order}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell   >
                <span style={{fontWeight:'bold'}}>Product Name: </span> 
                {orderName}
          </StyledTableCell>
        </StyledTableRow>

        <StyledTableRow>
          <StyledTableCell style={{display:'flex', justifyContent:' space-between'}}>
          <span>
          <span style={{fontWeight:'bold'}}>Status: </span> 
          {status}
          </span>
                <Button onClick={() => updateStatus(_id)} variant='contained'>Approve</Button>
          </StyledTableCell>
        </StyledTableRow>

        </TableBody>
        </Table>
        </TableContainer>
    );
};

export default ManageOrdersCard;