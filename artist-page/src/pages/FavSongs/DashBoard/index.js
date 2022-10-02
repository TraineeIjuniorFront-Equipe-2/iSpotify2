import "./style.css";
import favSong from "../../../assets/icons/favSong.svg";

function Dashboard() {
  return (
    <div className="Container">
      <div className="Top">
        <div className="Image">
          <img src={favSong} alt="" className="favSong" />
        </div>
        <div className="Description">
          <p>PLAYLIST</p>
          <h1>Músicas Curtidas</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
