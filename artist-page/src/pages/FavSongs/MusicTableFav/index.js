import { useEffect, useState } from "react";

import clock from "../../../assets/icons/clock.svg";
import MusicTableRowFav from "../MusicTableRowFav";

import "./style.css";

const MusicTableFav = ({ ...props }) => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const likedSongs = JSON.parse(localStorage.getItem("songs"));

    if (likedSongs) {
      setMusicList(likedSongs);
    }
  }, []);

  const handleDeleteMusic = (id) => {
    const newList = musicList?.filter((music) => music.id !== id);
    setMusicList(newList);
    localStorage.setItem("songs", JSON.stringify(newList));
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
          <MusicTableRowFav
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
