import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Review = () => {
     const [reviews, setReviews] = useState([]);
     useEffect(() => {
          const url = 'https://niche-server-side-project-assignment-12-106e3p4jy-zonaetmunna.vercel.app/review';
          fetch(url)
               .then(res => res.json())
               .then(data => setReviews(data))
     }, [])
     return (
          <div>
               <Container >
                    <Typography sx={{ textAlign: 'center', color: '#4C8EFA', mt: 5, mb: 4 }} variant="h4" >Customer Review</Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                         {
                              reviews.map(review => <Grid item xs={12} sm={4} md={4} key={review._id}>
                                   <Card sx={{ maxWidth: 345 }}>

                                        <CardContent>
                                             <Typography gutterBottom variant="h6" component="div">
                                                  {review.displayName
                                                  }
                                             </Typography>
                                             <Typography gutterBottom variant="body1" component="div">
                                                  {review.email
                                                  }
                                             </Typography>
                                             <Typography gutterBottom variant="h6" component="div">
                                                  {review.productName
                                                  }
                                             </Typography>
                                             <Typography variant="body2" color="text.secondary">
                                                  {review.comment}
                                             </Typography>

                                             <Rating
                                                  style={{ fontSize: '7px', color: 'blue' }}
                                                  initialRating={review.star}
                                                  emptySymbol="fa fa-star-o fa-2x "
                                                  fullSymbol="fa fa-star fa-2x"
                                                  readonly
                                             />

                                        </CardContent>

                                   </Card>
                              </Grid>)
                         }
                    </Grid>
               </Container>

          </div>
     );
};

export default Review;