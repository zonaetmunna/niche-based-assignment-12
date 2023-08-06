import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signupImage from "../../../assets/images/login-image.png";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, error, success } = useAuth();
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    // console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("password didnt match");
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
  };

  useEffect(() => {
    if (success) {
      navigate("/login");
    }
  }, [success, navigate]);

  // Display an error message if there is an error
  useEffect(() => {
    if (error) {
      // You can use any toast or notification library to show the error message
      alert(error);
    }
  }, [error]);

  return (
    <div>
      <Container>
        <Typography>Register</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {isLoading && <CircularProgress />}
            {!isLoading && (
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ width: "75%", my: 1 }}
                  label="name"
                  variant="standard"
                  type="text"
                  name="name"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", my: 1 }}
                  label="your email"
                  variant="standard"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", my: 1 }}
                  label="your password"
                  variant="standard"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", my: 1 }}
                  label="Re-Password"
                  variant="standard"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                />
                <Button
                  type="submit"
                  sx={{ width: "75%", my: 1 }}
                  variant="contained"
                >
                  Register
                </Button>
              </form>
            )}
            <p>--------------</p>
            {user.email && (
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
            <NavLink to="/login">Already have account ? please login</NavLink>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={signupImage} alt="Login" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
