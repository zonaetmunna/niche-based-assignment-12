import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import useAuth from "../../../../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const url = `https://niche-server-side-project-assignment-12.vercel.app/orders/specific?email=${user.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [user.email]);

  // order delete handle
  const handleDelete = (id) => {
    const proceeds = window.confirm("are you sure");
    if (proceeds) {
      const url = `https://niche-server-side-project-assignment-12-106e3p4jy-zonaetmunna.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted data successfully");
            const remainingOrder = orders.filter((order) => order._id !== id);
            setOrders(remainingOrder);
          }
        });
    }
  };

  return (
    <div>
      <Container>
        <Typography variant="h5">
          {" "}
          {user.displayName} orders : {orders.length}
        </Typography>
        <Grid item spacing={2}>
          <Grid xs={12} md={12} sx={{ textAlgin: "center" }}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>user name</TableCell>
                    <TableCell align="right"> user email</TableCell>
                    <TableCell align="right">Product name</TableCell>
                    <TableCell align="right">Product quantity</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.userName}
                      </TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.productName}</TableCell>
                      <TableCell align="right">{row.productQuantity}</TableCell>
                      <TableCell align="right">
                        <Button onClick={() => handleDelete(row._id)}>
                          Delete
                        </Button>
                      </TableCell>
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

export default MyOrders;
