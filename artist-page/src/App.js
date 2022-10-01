import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Artist from "./pages/Artist";
import Album from "./pages/Album";
import FavSongs from "./pages/FavSongs";
import myAccount from "./pages/myAccount";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute user={true}></ProtectedRoute>} />
      <Route path="/favSongs" element={<FavSongs />} />
      <Route path="/myAccount" element={<myAccount />} />
      <Route path="/album" element={<Album />} />
      <Route path="/register" element={<Register />} />
      <Route path="/album" element={<Album />} />
      <Route
        path="/artist"
        element={<ProtectedRoute user={true}></ProtectedRoute>}
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
