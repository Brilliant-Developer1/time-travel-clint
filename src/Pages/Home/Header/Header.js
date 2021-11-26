import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import header1 from '../../../images/header-1.png'

const Header = () => {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container >
                <img width='100%'  src={header1} alt="header" />
        </Container>
        </React.Fragment>
    );
};

export default Header;