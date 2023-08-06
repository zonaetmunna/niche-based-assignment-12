import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  // product state
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://niche-server-side-project-assignment-12.vercel.app/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, [id]);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // send to database
    const url =
      "https://niche-server-side-project-assignment-12-106e3p4jy-zonaetmunna.vercel.app/orders";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("order added ");
        reset();
      });
  };

  // handle back to home page
  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div style={{ margin: 20 }}>
      <Container s>
        <Grid
          container
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignContent: "center",
            mx: "auto",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 3, color: "#F06046" }} variant="h5">
              Products details
            </Typography>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {product.tags}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Price: {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* product purchaced form */}
          <Grid item xs={12} md={6} className="purchased-form">
            <Typography sx={{ mb: 3, color: "#F06046" }} variant="h6">
              Please check your information
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="input"
                defaultValue={user.displayName}
                {...register("userName")}
              />
              <br />
              <input
                className="input"
                defaultValue={user.email}
                {...register("email")}
              />
              <br />
              <input
                className="input"
                type="number"
                {...register("phone")}
                placeholder="your number"
              />
              <br />
              <input
                className="input"
                defaultValue={product.name}
                {...register("productName")}
                placeholder={product.name}
              />
              <br />
              <input
                className="input"
                defaultValue={product.price}
                {...register("productPrice")}
                placeholder={product.price}
              />
              <br />
              <input
                className="input"
                type="number"
                {...register("productQuantity")}
                placeholder="quantity"
              />
              <br />
              <input className="button" type="submit" value="order" />
            </form>
            <Button onClick={handleBack} sx={{ mt: 5 }} variant="container">
              more shop{" "}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Purchase;
