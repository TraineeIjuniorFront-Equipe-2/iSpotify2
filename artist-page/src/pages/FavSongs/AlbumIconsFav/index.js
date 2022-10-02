import { useState } from "react";

import "./styles.css";
import HeartFilledBigger from "../../../assets/icons/heartFilledBigger";
import play from "../../../assets/icons/play.svg";
import install from "../../../assets/icons/install.svg";
import moreOptions from "../../../assets/icons/moreOptions.svg";

const AlbumIconsFav = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="Containner">
      <img src={play} className="play" alt="play" />
      <img src={install} className="install" alt="install" />
    </div>
  );
};

export default AlbumIconsFav;
