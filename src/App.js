import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage"
import './App.css';
import ProtectedRoute from './components/hoc/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
