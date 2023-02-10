import { Button, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageP = () => {

     const [products, setProducts] = useState([]);
     useEffect(() => {
          const url = 'https://niche-server-side-project-assignment-12.vercel.app/products';
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data);
                    setProducts(data);
               })
     }, [])

     const handleDelete = (id) => {
          const proceeds = window.confirm("are you sure")
          if (proceeds) {
               const url = `https://niche-server-side-project-assignment-12.vercel.app/products/${id}`;
               fetch(url, {
                    method: 'DELETE'
               })
                    .then(res => res.json())
                    .then(data => {
                         if (data.deletedCount > 0) {
                              alert('deleted data successfully')
                              const remainingOrder = products.filter(order => order._id !== id);
                              setProducts(remainingOrder);
                         }
                    })
          }

     }

     return (
          <div>
               <Container>
                    <Grid item spacing={2}>
                         <Typography variant="h5"> products : {products.length}</Typography>
                         <Grid xs={12} md={12} sx={{ textAlgin: 'center' }}>
                              <TableContainer >
                                   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                        <TableHead>
                                             <TableRow>
                                                  <TableCell >Product name</TableCell>
                                                  <TableCell align="right">Action</TableCell>
                                             </TableRow>
                                        </TableHead>
                                        <TableBody>
                                             {products.map((product) => (
                                                  <TableRow
                                                       key={product._id}
                                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                  >
                                                       <TableCell component="th" scope="row">
                                                            {product.name}
                                                       </TableCell>
                                                       <TableCell align="right"><Button onClick={() => handleDelete(product._id)}>Delete</Button></TableCell>


                                                  </TableRow>
                                             ))}
                                        </TableBody>
                                   </Table>
                              </TableContainer>
                         </Grid>
                    </Grid>
               </Container>
          </div>
     );
};

export default ManageP;