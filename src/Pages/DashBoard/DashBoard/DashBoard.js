import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, CircularProgress } from '@mui/material';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import AdminRoute from './../../Login/AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';
import PrivateRoute from './../../Login/PrivateRoute/PrivateRoute';
import ReviewsData from '../../Home/Reviews/ReviewsData';
import AddReview from '../../Home/Reviews/AddReview';
import Pay from './../Pay/Pay';
import ManageOrders from './../ManageOrders/ManageOrders';
import AddProduct from './../AddProduct/AddProduct';
import ManageProducts from './../ManageProducts/ManageProducts';

const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  let { path, url } = useRouteMatch();
  const {admin, logout} = useAuth();
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Link to='/home' style={{
        textDecoration:'none',
        textAlign:'center', 
      }}>
      <Button  style={{color:'black'}} sx={{mt:4}}>
       Time-Travel
      </Button>
      </Link>
      <Divider />
      <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to="/watches"><Button color="inherit">Watch Collections</Button></Link>
     
            {!admin && <Box>
              <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to={`${url}`}><Button color="inherit">My Orders</Button></Link>
            <br />
            <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to={`${url}/reviews`}><Button color="inherit">Reviews</Button></Link>
            <br />
            <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to={`${url}/pay`}><Button color="inherit">Pay</Button></Link>
              </Box> 
            }

      { admin && <Box>
        <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
      <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to={`${url}/manageOrders`}><Button color="inherit">Manage Orders</Button></Link>
      <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
      <Link style={{textDecoration:'none',color:'black',textAlign:'right'}}
            to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
        </Box>
      }

      <Button onClick={logout} color="inherit">LogOut</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
      position="fixed" style={{background:'#2c3e50'}}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
        
      </Toolbar>
    </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
          { admin?
            <MakeAdmin></MakeAdmin>
            :
            <MyOrders></MyOrders>
          }
          </Route>
          <Route path={`${path}/reviews`}>
          <AddReview></AddReview>
          <ReviewsData></ReviewsData>
          </Route>
          <Route path={`${path}/pay`}>
          <Pay></Pay>
          </Route>
          { !admin ?
            <CircularProgress />
            :
            <>
            <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageOrders`}>
            <ManageOrders></ManageOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute> 
            </> 
          }
          <PrivateRoute path={`${path}/myOrders`}>
            
          </PrivateRoute>
        </Switch>
      </Box>
    </Box>
  );
}

export default DashBoard;
