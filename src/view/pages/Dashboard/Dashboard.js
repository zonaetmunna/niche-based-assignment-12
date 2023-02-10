import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../../components/page/dashboard/MyOrders/MyOrders';
import ReviewUser from '../../components/page/dashboard/ReviewUser/ReviewUser';
import Payment from '../../components/page/dashboard/Payment/Payment';
import AdminRoute from '../../components/AdminRoute/AdminRoute';
import AllOrders from '../../components/page/dashboard/ManageAllOrders/AllOrders';
import AddProduct from '../../components/page/dashboard/AddProduct/AddProduct';
import MakeAdmin from '../../components/page/dashboard/MakeAdmin/MakeAdmin';
import ManageP from '../../components/page/dashboard/ManageProducts/ManageP';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 200;

function Dashboard(props) {
     const { window } = props;
     const [mobileOpen, setMobileOpen] = React.useState(false);

     // nested route
     const { path, url } = useRouteMatch();
     // 
     const { user, admin, logOut } = useAuth();

     const handleDrawerToggle = () => {
          setMobileOpen(!mobileOpen);
     };

     const drawer = (
          <div>
               <Toolbar />
               <Divider />
               {/*nav link */}
               <Box sx={{ px: 4 }}>
                    <Link to="/home" style={{ textDecoration: 'none' }} >Home</Link>
                    <br />
                    {admin ? <Box>
                         <Link to={`${url}/manageAllOrders`} style={{ textDecoration: 'none' }} >Manage all order</Link>
                         <br />
                         <Link to={`${url}/addProduct`} style={{ textDecoration: 'none' }} >Add Product</Link>
                         <br />
                         <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }} >Make Admin</Link>
                         <br />
                         <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none' }} >Manage Products</Link>
                    </Box> :
                         <Box>

                              <Link to={`${url}`} style={{ textDecoration: 'none' }} >MyOrders</Link>
                              <br />

                              <Link to={`${url}/reviewUser`} style={{ textDecoration: 'none' }} >Review</Link>
                              <br />
                              <Link to={`${url}/payment`} style={{ textDecoration: 'none' }} >Pay</Link>
                              <br />
                         </Box>
                    }

                    <Link to={`${url}/payment`} style={{ textDecoration: 'none' }} ><Button onClick={logOut} color="inherit">Logout</Button></Link>
               </Box>

          </div>
     );

     const container = window !== undefined ? () => window().document.body : undefined;

     return (
          <Container >
               {/* <Grid item spacing={2}> */}
               {/* <Grid xs={12} md={6}> */}
               <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar
                         position="fixed"
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
                         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                         {/*  */}
                         {/* <Grid xs={12}> */}
                         <Switch>
                              <Route exact path={path}>
                                   <MyOrders />
                              </Route>
                              <Route path={`${path}/reviewUser`}>
                                   <ReviewUser />
                              </Route>
                              <Route path={`${path}/payment`}>
                                   <Payment />
                              </Route>
                              <AdminRoute path={`${path}/manageAllOrders`}>
                                   <AllOrders />
                              </AdminRoute>
                              <AdminRoute path={`${path}/addProduct`}>
                                   <AddProduct />
                              </AdminRoute>
                              <AdminRoute path={`${path}/makeAdmin`}>
                                   <MakeAdmin />
                              </AdminRoute>
                              <AdminRoute path={`${path}/manageProducts`}>
                                   <ManageP />
                              </AdminRoute>
                         </Switch>
                         {/* </Grid> */}

                    </Box>
               </Box>
               {/* </Grid> */}
               {/* </Grid> */}
          </Container>
     );
}

Dashboard.propTypes = {
     /**
      * Injected by the documentation to work in an iframe.
      * You won't need it on your project.
      */
     window: PropTypes.func,
};

export default Dashboard;