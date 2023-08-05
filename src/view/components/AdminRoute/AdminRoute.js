import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';




const AdminRoute = ({ children}) => {
     const { user, isLoading, admin } = useAuth();
     const { pathname } = useLocation();

  if (isLoading) {
    return <CircularProgress />;
  }
  if (!isLoading && (!user || admin || !user.email)) {
     return <Navigate to="/login" state={{ path: pathname }} />;
   }

   return <>{children}</>;
};

export default AdminRoute;

