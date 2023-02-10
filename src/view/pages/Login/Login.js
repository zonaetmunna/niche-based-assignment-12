import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
     const [loginData, setLoginData] = useState({})
     const { user, loginUser, error, isLoading } = useAuth();
     const history = useHistory();
     const location = useLocation();

     // handleBlur
     const handleOnBlur = e => {
          const field = e.target.name;
          const value = e.target.value;
          const newLoginData = { ...loginData };
          newLoginData[field] = value;
          console.log(newLoginData);
          setLoginData(newLoginData);
     };

     // handle submit
     const handleSubmit = e => {
          e.preventDefault();
          loginUser(loginData.email, loginData.password, location, history);

     }


     return (
          <div>
               <Container>
                    <Typography>Login</Typography>

                    <Grid container spacing={2}>
                         <Grid item xs={12} md={6}>
                              {isLoading && < CircularProgress />}

                              {!isLoading && <form onSubmit={handleSubmit}>

                                   <TextField
                                        sx={{ width: '75%', my: 1 }}
                                        label="your email"
                                        variant="standard"
                                        type="email"
                                        name="email"
                                        onBlur={handleOnBlur}

                                   />
                                   <TextField
                                        sx={{ width: '75%', my: 1 }}
                                        label="your password"
                                        variant="standard"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}

                                   />

                                   <Button type="submit" sx={{ width: '75%', my: 1 }} variant="contained">Login</Button>

                              </form>}
                              <p>--------------</p>
                              {user.email && <Alert severity="success">user login successfully</Alert>
                              }
                              {error && <Alert severity="error">{error}</Alert>
                              }
                              <NavLink to="/register">new user? please Register</NavLink>

                         </Grid>
                         <Grid item xs={12} md={6}>
                              <img src="" alt="" />
                         </Grid>

                    </Grid>
               </Container>
          </div>
     );
};

export default Login;