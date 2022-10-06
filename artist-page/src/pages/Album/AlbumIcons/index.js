import { useState } from "react";

import "./style.css";
import HeartFilledBigger from "../../../assets/icons/heartFilledBigger";
import play from "../../../assets/icons/play.svg";
import install from "../../../assets/icons/install.svg";
import moreOptions from "../../../assets/icons/moreOptions.svg";

const AlbumIcons = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="Containner">
      <img src={play} className="play" alt="play" />
      <div className="heart">
        <button
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        >
          <HeartFilledBigger isFilled={isLiked} />
        </button>
      </div>

      <img src={install} className="install" alt="install" />
      <img src={moreOptions} className="moreOptions" alt="moreOptions" />
    </div>
  );
};

export default AlbumIcons;
