import { Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
     root: {
          background: '#000000',
          color: 'white',
     },
     hoverText: {
    '&:hover': {
          color: 'rgb(7, 177, 77, 0.42)'
    }
  }
});


const Banner = () => {
     const { root,hoverText } = useStyle();
     return (
          <div className={root} sx={{boxShadow: 2 }} >
               <Container sx={{mt:5}}>
                    <Box sx={{ flexGrow: 1 }} >
                         <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                              <Grid item xs={12} md={6} sx={{p:2}}>
                                   <Typography className={hoverText} sx={{ m: 2 }} variant="h4">The stone series</Typography>
                                   <Typography className={hoverText} variant="body1" sx={{ m: 2 }}>Rolex offers a wide range of models ranging from professional to classic watches to suit Rolex offers a wide range of models ranging</Typography>
                                   <Button sx={{ m: 2 }}  variant="contained"><Link style={{ textDecoration: 'none',color:'white' }} to="/explore">Explore</Link></Button>
                              </Grid>
                              <Grid item xs={12} md={6} sx={{p:2}}>
                                   <img src="https://i.ibb.co/N6R3STk/hours-watch-pointers-time-2.jpg"  style={{ width: '75%' }} alt="" />
                              </Grid>

                         </Grid>
                    </Box>
               </Container>
          </div>
     );
};

export default Banner;