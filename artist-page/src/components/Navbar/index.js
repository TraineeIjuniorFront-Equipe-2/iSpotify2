import ispotify from "../../assets/icons/ispotify.png";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <header>
        <img src={ispotify} className="ispotify" alt="ispotify" />
        <h1 className="logoName">iSpotify®</h1>
      </header>
      <main className="containner">
        <p>Artistas</p>
        <p>Músicas Curtidas</p>
      </main>
      <footer>
        <p>Logout</p>
      </footer>
    </nav>
  );
};

export default Navbar;