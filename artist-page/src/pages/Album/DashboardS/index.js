import AlbumDescription from "../AlbumDescription";
import MusicTable from "../MusicTable";
import AlbumIcons from "../AlbumIcons";

import "./style.css";

import { musicData } from "./data";

const DashboardS = () => {
  return (
    <main className="dashboardS">
      <section>
        <AlbumDescription />
        <div className="album-iconsS">
          <AlbumIcons />
        </div>
        <MusicTable musicData={musicData} />
      </section>
    </main>
  );
};

export default DashboardS;
