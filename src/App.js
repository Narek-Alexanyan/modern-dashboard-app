import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage"
import ProtectedRoute from './components/hoc/ProtectedRoute';
import Navbar from './components/navigation/Navbar';
import Sidebar from './components/navigation/Sidebar';
import PropertyPage from './pages/property/PropertyPage';
import AgentPage from './pages/agent/AgentPage';
import ReviewPage from './pages/review/ReviewPage';
import MessagePage from './pages/message/MessagePage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <div className='flex'>
        {location.pathname !== "/" && <Sidebar />}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path="/property" element={
            <ProtectedRoute>
              <PropertyPage />
            </ProtectedRoute>
          } />
          <Route path="/agent" element={
            <ProtectedRoute>
              <AgentPage />
            </ProtectedRoute>
          } />
          <Route path="/review" element={
            <ProtectedRoute>
              <ReviewPage />
            </ProtectedRoute>
          } />
          <Route path="/message" element={
            <ProtectedRoute>
              <MessagePage />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;
