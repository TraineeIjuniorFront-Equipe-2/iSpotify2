import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import Artist from "./pages/Artist";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute user={true}>
            <LoginPage />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/artist"
        element={
          <ProtectedRoute user={true}>
            <Artist />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

const ProtectedRoute = ({ user, notUser }) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return notUser;
};
