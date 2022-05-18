import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ canLogin, outletRoute }) => {
    const isAuth = canLogin;
    return isAuth ? <Outlet to={outletRoute} /> : <Navigate to={'/signup'} />
}

export default ProtectedRoutes;