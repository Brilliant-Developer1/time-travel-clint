import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle'; 
import MoreIcon from '@mui/icons-material/MoreVert';
import WatchIcon from '@mui/icons-material/Watch';
import { Link } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Navigation() {
    const {user,logout} = useAuth();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogOut = () => {
    logout();
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      { user?.email ?
        <Box>
        
        <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
        
        </Box>
        :
        <Link to='/login' style={{textDecoration:'none', color:'black'}}
        ><MenuItem onClick={handleMenuClose}>Login</MenuItem></Link>

      }
      
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    <Link to='/watches' style={{textDecoration:'none', color:'black'}}>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge >
            <WatchIcon />
          </Badge>
        </IconButton>
        <p>Collection</p>
        </MenuItem>
        </Link>

      {
        user?.email ?
        <Link to='/dashboard' style={{textDecoration:'none', color:'black'}}>
        <MenuItem>
        <IconButton
          size="large"
          aria-label="show Dashboard"
          color="inherit"
        >
          <Badge >
            <DashboardIcon />
          </Badge>
        </IconButton>
        <p>Dashboard</p>
        </MenuItem>
        </Link>
        :
        ''
      }

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>User</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background:'#2c3e50'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/home' style={{textDecoration:'none', color:'white'}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Time-Travel
          </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to='/watches' style={{textDecoration:'none', color:'white'}}>
            <IconButton size="large" aria-label="Watches" color="inherit">
            <Badge color="error">
            <WatchIcon />
            </Badge>
            </IconButton>
            </Link>

            { user?.email ?
              <Link to='/dashboard' style={{textDecoration:'none', color:'white'}}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge color="error">
              <DashboardIcon />
              </Badge>
            </IconButton>
            </Link>
            :
            ''
            }

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
