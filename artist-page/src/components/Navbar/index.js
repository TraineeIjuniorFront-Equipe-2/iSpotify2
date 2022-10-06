import React from "react";
import { useNavigate } from "react-router-dom";

import ispotify from "../../assets/icons/ispotify.png";
import Logout from "../../assets/icons/logout.png";

import { api } from "../../api";

import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await api.post("/users/logout");
      navigate("/");
    } catch (err) {
      navigate("/");
    }
  };

  return (
    <nav className="navbar">
      <header>
        <img
          onClick={() => navigate("../home")}
          src={ispotify}
          className="ispotify"
          alt="ispotify"
        />
        <h1 className="logoName" onClick={() => navigate("../home")}>
          iSpotify®
        </h1>
      </header>

      <div className="nav-btns">
        <a href="/home">Artistas</a>
        <a href="/favSongs">Músicas Curtidas</a>
        <a href="/myAccount">Minha Conta</a>
      </div>

      <footer className="logout">
        <p style={{ cursor: "pointer" }} onClick={() => handleSubmit()}>
          Logout
        </p>
        <img src={Logout} alt="" />
      </footer>
    </nav>
  );
};

export default Navbar;
