import "./style.css";
import favSong from "../../../assets/icons/favSong.svg";

import MusicTableFav from "../MusicTableFav";
import AlbumIconsFav from "../AlbumIconsFav";
import { musicData } from "../../Album/DashboardS/data";

function Dashboard() {
  return (
    <div className="ContainerF">
      <div className="TopF">
        <div className="ImageF">
          <img src={favSong} alt="" className="favSongF" />
        </div>
        <div className="DescriptionF">
          <p>PLAYLIST</p>
          <h1>Músicas Curtidas</h1>
        </div>
      </div>
      <AlbumIconsFav />
      <MusicTableFav musicData={musicData} />
    </div>
  );
}

export default Dashboard;
