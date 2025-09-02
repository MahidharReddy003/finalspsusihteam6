import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Profile from '../pages/Profile.jsx';
import Internships from '../pages/Internships.jsx';
import Recommendations from '../pages/Recommendations.jsx';
import Applications from '../pages/Applications.jsx';
import CompanyPortal from '../pages/CompanyPortal.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Settings from '../pages/Settings.jsx';
import { AuthProvider, useAuth } from './AuthContext.jsx';

function AppRoutes() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" replace />} />
      <Route path="/signup" element={!isAuthenticated ? <Signup /> : <Navigate to="/dashboard" replace />} />
      
      {/* Protected routes */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />
      <Route path="/dashboard" element={isAuthenticated ? <Layout><Dashboard /></Layout> : <Navigate to="/login" replace />} />
      <Route path="/profile" element={isAuthenticated ? <Layout><Profile /></Layout> : <Navigate to="/login" replace />} />
      <Route path="/settings" element={isAuthenticated ? <Layout><Settings /></Layout> : <Navigate to="/login" replace />} />
      <Route path="/internships" element={isAuthenticated ? <Layout><Internships /></Layout> : <Navigate to="/login" replace />} />
      <Route path="/recommendations" element={isAuthenticated ? <Layout><Recommendations /></Layout> : <Navigate to="/login" replace />} />
      <Route path="/applications" element={isAuthenticated ? <Layout><Applications /></Layout> : <Navigate to="/login" replace />} />
      <Route path="/company-portal" element={isAuthenticated ? <Layout><CompanyPortal /></Layout> : <Navigate to="/login" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
