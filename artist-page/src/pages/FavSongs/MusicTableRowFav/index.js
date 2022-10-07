import { useState } from "react";

import HeartFilled from "../../../assets/icons/heartFilled";
import trash from "../../../assets/icons/trash.svg";
import playArrow from "../../../assets/icons/playArrow.svg";

import "./style.css";

const MusicTableRowFav = ({ index, name, artist, album, onDelete }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="music-table-row">
      <div
        className="music-table-row-content"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span>{isHovered ? <img src={playArrow} alt="play" /> : index}</span>
          <div>
            <p>{name}</p>
            <p>{artist}</p>
          </div>
        </div>
        <div>
          <span>{album}</span>
        </div>
        <div className="music-table-row-btns">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
            }}
          >
            <HeartFilled isFilled={isLiked} />
            
          </button>
          <button onClick={onDelete}>
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicTableRowFav;
