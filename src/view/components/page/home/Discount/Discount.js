import { Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {

     const useStyle = makeStyles({
          bg: {
               backgroundColor: '#4CFAF8'
          }
     })

     const { bg } = useStyle();
     return (
          <div className={bg} style={{ margin: '20px' }}>
               <Container sx={{}}>
                    <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5, p: 3 }}>

                         <Grid item xs={12} md={6} >
                              <img src="https://i.ibb.co/HCCcYkf/images.jpg" style={{ width: '75%' }} alt="" />
                         </Grid>
                         <Grid item xs={12} md={6} className={bg}>
                              <Typography variant="h3">Rolex</Typography>
                              <Typography variant="body1">we offer 20 % discount every double products </Typography>
                              <Button sx={{ m: 2 }} variant="contained"><Link style={{ textDecoration: 'none' }} to="/explore">Explore</Link></Button>
                         </Grid>

                    </Grid>
               </Container>
          </div>
     );
};

export default Discount;