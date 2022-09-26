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
        element={<ProtectedRoute user={false}></ProtectedRoute>}
      />
      <Route path="/register" element={<Register />} />
      <Route
        path="/artist"
        element={<ProtectedRoute user={false}></ProtectedRoute>}
      />
    </Routes>
  );
}

export default App;

const ProtectedRoute = ({ user }) => {
  if (!user) {
    return <LoginPage />;
  }
  return <Artist />;
};
