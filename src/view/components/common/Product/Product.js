import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles, useTheme } from '@mui/styles';
import React from 'react';
import { useNavigate } from "react-router-dom";

 
const Product = ({ product }) => {
     const { _id, name, tags, image, description, price } = product;
     const navigate = useNavigate();



     const handleGoPurchase = () => {
          const url = `/purchase/${_id}`;
          navigate(url)
     }

     const theme = useTheme();
     const useStyle = makeStyles({
          cardContainer: {
               color: 'black',
               padding: '10px',
               "&:hover": {
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
               }
          },
     });
     const { cardContainer } = useStyle();

     return (
          <Grid item xs={12} sm={12} md={4} >
               <Card className={cardContainer} sx={{ maxWidth: 345, height: 1 }}>
                    <CardMedia
                         component="img"
                         height="300"
                         image={image}
                         alt="green iguana"
                    />
                    <CardContent style={{color:'black'}}>
                         <Typography gutterBottom variant="h5" component="div">
                              {name}
                         </Typography>
                         <Typography variant="body2" >
                              {tags}
                         </Typography>
                         <Typography variant="body2"  >
                              $ {price}
                         </Typography>
                         <Typography variant="body2" >
                              {description}
                         </Typography>
                    </CardContent>
                    <CardActions>
                         <Button onClick={handleGoPurchase} variant="contained">order now</Button>

                    </CardActions>
               </Card>
          </Grid>
     );
};

export default Product;