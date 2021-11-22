import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { selectisAuth } from '../../features/auth/authSelectors';
import { useSelector } from 'react-redux'

export const PrivateRoute = () => {
    const isAuth = useSelector(selectisAuth);
    return isAuth === "1" ? <Outlet /> : <Navigate to="/login" />;
}