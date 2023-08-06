import Box from "@mui/material/Box";
import React from "react";

import { ListItemButton, ListItemText, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Footer = () => {
  return (
    <div style={{ background: "#240909", color: "white" }}>
      <Box sx={{ flexGrow: 1, p: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Information</Typography>
            <ListItemButton
              variant="h6"
              style={{ textAlign: "left" }}
              component="a"
              href="#simple-list"
            >
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton variant="h6" component="a" href="#simple-list">
              <ListItemText primary="About Us" />
            </ListItemButton>
            <ListItemButton variant="h6" component="a" href="#simple-list">
              <ListItemText primary="Shipping Details" />
            </ListItemButton>
            <ListItemButton variant="h6" component="a" href="#simple-list">
              <ListItemText primary="Explore watch" />
            </ListItemButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Contact us</Typography>
            <ListItemButton component="a" href="#simple-list">
              <i style={{ margin: 3 }} class="fab fa-google"></i>
              <br />
              <i style={{ margin: 3 }} class="fab fa-facebook-square"></i>
              <br />
              <i style={{ margin: 3 }} class="fab fa-whatsapp-square"></i>
              <br />
              <Typography variant="body1"> +000 - 123456789</Typography>
            </ListItemButton>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Subscribe to our</Typography>
            <Typography sx={{ mt: 2 }}>
              Be the first to hear about new arrivals, by invitation only sales
              and special events
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
