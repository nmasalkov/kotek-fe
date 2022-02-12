import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const  PrivateRoute = ({ children }) => {
    const auth = localStorage.getItem('authToken');
    return auth ? children : <Navigate to="/login" />
}

export default PrivateRoute
