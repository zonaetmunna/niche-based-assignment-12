import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
     const { user, isLoading } = useAuth();
     const location = useLocation();
     if (isLoading) {
          return <CircularProgress />

     }
     if (!isLoading && (!user || !user.email)) {
          return <Navigate to="/login" state={{ path: location.pathname }} />;
     }
   return <>{children}</>;
};

export default PrivateRoute;