import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage"
import ProtectedRoute from './components/hoc/ProtectedRoute';
import Navbar from './components/navigation/Navbar';

function App() {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
