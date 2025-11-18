import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    // If not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  if (user.role !== requiredRole) {
    // If logged in but not the right role, redirect to not found or another page
    return <Navigate to="/not-found" />;
  }

  return children; // Render the protected component
};

export default ProtectedRoute;
