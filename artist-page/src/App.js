import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Artist from "./pages/Artist";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/artist" element={<Artist />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
