import { useEffect } from "react";

import Dashboard from "../../components/Dashboard";
import Navbar from "../../components/Navbar";

import "../../App.css";

function HomePage() {
  useEffect(() => {
    document.title = "iSpotify";
  });
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default HomePage;
