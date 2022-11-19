import { useEffect } from "react";

import "./style.css";
import Navbar from "../../components/Navbar";
import Dashboard from "./DashBoard";

function FavSongs() {
  useEffect(() => {
    document.title = "Músicas Curtidas";
  });
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default FavSongs;
