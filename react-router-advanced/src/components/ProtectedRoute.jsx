import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// ProtectedRoute component accepts `element` and `isAuthenticated` as props
const ProtectedRoute = ({ element, isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    // If not authenticated, redirect to login or home page
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the requested component
  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
