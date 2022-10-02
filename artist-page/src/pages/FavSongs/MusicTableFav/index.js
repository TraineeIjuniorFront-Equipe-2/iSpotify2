import { useState } from "react";
import clock from "../../../assets/icons/clock.svg";
import MusicTableRow from "../MusicTableRowFav";

import "./style.css";

const MusicTableFav = ({ musicData, ...props }) => {
  const [musicList, setMusicList] = useState(musicData);

  const handleDeleteMusic = (id) => {
    setMusicList((prevState) => prevState.filter((music) => music.id !== id));
  };

  return (
    <div className="table" {...props}>
      <header>
        <div>
          <span>#TÍTULO</span>
        </div>
        <div>
          <span>ÁLBUM</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img src={clock} alt="" />
        </div>
      </header>
      <hr />
      <div className="content">
        {musicList.map((music, i) => (
          <MusicTableRow
            key={music.id}
            index={i + 1}
            onDelete={() => {
              handleDeleteMusic(music.id);
            }}
            {...music}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicTableFav;
