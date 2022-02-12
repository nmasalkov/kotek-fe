import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const auth = localStorage.getItem('authToken');

    return auth ? <Navigate to="/cards" /> : children
}

export default PublicRoute
