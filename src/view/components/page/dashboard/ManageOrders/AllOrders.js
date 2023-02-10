import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Grid } from '@mui/material';


const ManageOrders = () => {

     const [products, setProducts] = useState([])
     useEffect(() => {
          const url = 'https://niche-server-side-project-assignment-12.vercel.app/orders';
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    setProducts(data);
                    // console.log(data);
               })
     }, [])
     console.log(products)
     return (
          <div>
               <Container>
                    <Grid>
                         <Grid xs={12} sm={8} md={12}>
                              <TableContainer component={Paper}>
                                   <Table aria-label="simple table">
                                        <TableHead>
                                             <TableRow>
                                                  <TableCell align="left">order user name</TableCell>
                                                  <TableCell align="left">order user email</TableCell>
                                                  <TableCell align="left">products name</TableCell>
                                                  <TableCell align="left">products Price</TableCell>
                                             </TableRow>
                                        </TableHead>
                                        <TableBody>
                                             {products.map((row) => (
                                                  <TableRow
                                                       key={row._id}
                                                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                  >
                                                       <TableCell component="th" scope="row">
                                                            {row.userName}
                                                       </TableCell>
                                                       <TableCell align="left">{row.email}</TableCell>
                                                       <TableCell align="left">{row.productName}</TableCell>
                                                       <TableCell align="left">{row.productPrice}</TableCell>
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

export default ManageOrders;