import { Container, Grid, Typography ,Input,Button} from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = data => {
          
          console.log(data);
          const url = 'https://niche-server-side-project-assignment-12-106e3p4jy-zonaetmunna.vercel.app/products';
          fetch(url, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(addedProduct)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         alert('product added')
                         reset();
                    }
               })
     };
     
     return (
          <div>
               <Container>
                    <Grid item spacing={2}>
                         <Grid xs={12} sm={6} md={6}>
                              <Typography sx={{ textAlign: 'left' }} variant="h5" >Add products</Typography>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <input style={{ marginTop: '10px' }} {...register("name",{ required: true })} placeholder="name" />
                                   <br />
                                   <input style={{ marginTop: '10px' }}  {...register("tags",{ required: true })} placeholder="tags" />
                                   <br />
                                   <input style={{ marginTop: '10px' }}  {...register("price",{ required: true })} placeholder="price" />
                                   <br />
                                   <input style={{ marginTop: '10px' }} {...register("description",{ required: true })} placeholder="description" />
                                   <br />
                                   {/* <input style={{ marginTop: '10px' }}  {...register("image",{ required: true })} placeholder="image" />
                                   <br /> */}

                                   <Input
                                   style={{ marginTop: '10px' }}
                                   {...register("image",{ required: true })} 
                                        accept="image/*" 
                                        type="file" />
                                   <br />
                                   <input style={{ marginTop: '10px' }} type="submit" />
                              </form>
                         </Grid>
                         <Grid xs={12} sm={6} md={6}>

                         </Grid>
                    </Grid>
               </Container>
          </div>
     );
};

export default AddProduct;