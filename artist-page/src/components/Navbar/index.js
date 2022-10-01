import ispotify from "../../assets/icons/ispotify.png";
import Heart from "../../assets/icons/favorite.png";
import Logout from "../../assets/icons/logout.png";
import Disk from "../../assets/icons/album.png";

import { useNavigate } from "react-router-dom";

import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <header>
        <img src={ispotify} className="ispotify" alt="ispotify" />
        <h1 className="logoName">iSpotify®</h1>
      </header>

      <main className="containner">
        <p className="artist" onClick={() => navigate("../")}>
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
        <p onClick={() => navigate("../logout")}>Logout</p>
        <img src={Logout} alt="" />
      </footer>
    </nav>
  );
};

export default Navbar;
