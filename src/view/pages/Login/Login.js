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
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/login-image.png";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, error, isLoading, success } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // handleBlur
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData.email, loginData.password, location, navigate);
  };

  // Repage the user if there was a successful action (e.g., registration or logout)
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
      <Container sx={{ my: 5 }}>
        <Typography variant="h5">Login</Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {isLoading && <CircularProgress />}

            {!isLoading && (
              <form onSubmit={handleSubmit}>
                <TextField
                  sx={{ width: "75%", my: 1 }}
                  label="Your Email"
                  variant="standard"
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                />
                <TextField
                  sx={{ width: "75%", my: 1 }}
                  label="Your Password"
                  variant="standard"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                />

                <Button
                  type="submit"
                  sx={{ width: "75%", my: 1 }}
                  variant="contained"
                >
                  Login
                </Button>
              </form>
            )}
            <p>--------------</p>
            {success && <Alert severity="success">User login successful</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <NavLink to="/register">New user? Please register</NavLink>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={loginImage} alt="Login" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
