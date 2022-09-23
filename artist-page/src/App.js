import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

import Artist from "./components/Artist";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Artist />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
