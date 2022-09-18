import ispotify from "../../assets/icons/ispotify.png";
import Heart from "../../assets/icons/favorite.png";
import Logout from "../../assets/icons/logout.png";
import Disk from "../../assets/icons/album.png";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <header>
        <img src={ispotify} className="ispotify" alt="ispotify" />
        <h1 className="logoName">iSpotify®</h1>
      </header>

      <main className="containner">
        <p className="artist">Artistas</p>
        <p className="music">Músicas Curtidas</p>
      </main>
      <footer className="logout">
        <p>Logout</p><img src={Logout} alt="" />
      </footer>
    </nav>
  );
};

export default Navbar;