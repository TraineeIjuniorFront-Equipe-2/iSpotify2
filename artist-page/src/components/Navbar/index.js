import ispotify from "../../assets/icons/ispotify.png";
import Heart from "../../assets/icons/favorite.png";
import Logout from "../../assets/icons/logout.png";
import Disk from "../../assets/icons/album.png";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";
import { api } from "../../api";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post("/users/logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav className="navbar">
      <header>
        <img src={ispotify} className="ispotify" alt="ispotify" />
        <h1 className="logoName">iSpotify®</h1>
      </header>

      <main className="containner">
        <p className="artist" onClick={() => navigate("../artist")}>
          Artistas
        </p>
        <p className="music" onClick={() => navigate("../favSongs")}>
          Músicas Curtidas
        </p>
        <p className="myAccount" onClick={() => navigate("../myAccount")}>
          Minha Conta
        </p>
      </main>

      <footer className="logout">
        <p onClick={() => handleSubmit()}>Logout</p>

        <img src={Logout} alt="" />
      </footer>
    </nav>
  );
};

export default Navbar;
