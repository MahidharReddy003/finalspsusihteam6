import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../Layout.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Profile from '../pages/Profile.jsx';
import Internships from '../pages/Internships.jsx';
import Recommendations from '../pages/Recommendations.jsx';
import Applications from '../pages/Applications.jsx';
import CompanyPortal from '../pages/CompanyPortal.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/company-portal" element={<CompanyPortal />} />
      </Routes>
    </Layout>
  );
}

export default App;
