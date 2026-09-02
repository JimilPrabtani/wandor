import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait for session restore before deciding to redirect
  if (loading) return null;

  if (!user) {
    // Redirect to login preserving intended destination
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
