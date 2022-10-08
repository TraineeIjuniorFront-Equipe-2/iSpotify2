import trash from "../../../assets/icons/trash.svg";

import "./style.css";

const MusicTableRowFav = ({ name, img, singer, album, onDelete }) => {
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
          {/* <button
            onClick={() => {
              handleLikeSong();
              //salvaria um json(vetor) contendo os dados das musicas curtidas
            }}
          >
            <HeartFilled isFilled={isLiked} />
          </button> */}

          <button onClick={onDelete}>
            <img src={trash} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicTableRowFav;
