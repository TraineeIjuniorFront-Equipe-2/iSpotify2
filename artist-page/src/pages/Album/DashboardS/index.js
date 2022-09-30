import AlbumDescription from "../AlbumDescription";
import MusicTable from "../MusicTable";
import AlbumIcons from "../AlbumIcons";

import "./style.css";

import { musicData } from "./data";

const DashboardS = () => {
  return (
    <main className="dashboard">
      <section>
        <AlbumDescription />
        <div className="album-icons">
          <AlbumIcons />
        </div>
        <MusicTable musicData={musicData} />
      </section>
    </main>
  );
};

export default DashboardS;
