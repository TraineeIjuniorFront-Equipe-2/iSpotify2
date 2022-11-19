import { useState, useEffect } from "react";

import HeartFilled from "../../../assets/icons/heartFilled";
import trash from "../../../assets/icons/trash.svg";

import "./style.css";

const MusicTableRow = ({ index, name, singer, album, img, id }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likedSongsList, setLikedSongsList] = useState([]);

  useEffect(() => {
    const likedSongs = JSON.parse(localStorage.getItem("songs"));

    if (likedSongs) {
      setLikedSongsList(likedSongs);
      likedSongs?.forEach((e) => {
        e?.id === id && setIsLiked(true);
      });
    }
  }, []);

  const handleLikeSong = () => {
    const songData = {
      name,
      singer,
      album,
      img,
      id,
    };

    if (!isLiked) {
      const newList = [songData, ...likedSongsList];
      setLikedSongsList(newList);

      localStorage.setItem("songs", JSON.stringify(newList));
    } else {
      const newList = likedSongsList?.filter((e) => e?.id !== id);
      setLikedSongsList(newList);
      localStorage.setItem("songs", JSON.stringify(newList));
    }

    setIsLiked(!isLiked);
  };

  const saveLiked = {
    name: name,
    singer: singer,
    album: album,
    img: img,
  };
  return (
    <div className="music-table-row">
      <div className="music-table-row-content">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <img src={img} alt="play" width={"40px"} />
          <div style={{ textAlign: "start" }}>
            <p>{name}</p>
            <p>{singer}</p>
          </div>
        </div>
        <div>
          <span>{album}</span>
        </div>
        <div className="music-table-row-btns">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              localStorage.setItem("saveLiked", JSON.stringify(saveLiked));
              localStorage.setItem("saveLiked", JSON.stringify(saveLiked));

              handleLikeSong();
              //salvaria um json(vetor) contendo os dados das musicas curtidas
            }}
          >
            <HeartFilled isFilled={isLiked} />
          </button>
          {/*<button onClick={onDelete}>
             <img src={trash} alt="" />
            </button>*/}
        </div>
      </div>
    </div>
  );
};

export default MusicTableRow;
