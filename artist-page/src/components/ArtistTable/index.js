import "./style.css";

const ArtistTable = ({ songs }) => {
  return (
    <div className="container-artist-list">
      {songs.map((val, i) => (
        <div className="Artist" key={i}>
          <img
            src={val?.url}
           // style={{ height: val?.height, width: val?.width }}
            alt="artist"
            className="artist_image"
          />
          <span className="artist_name">{val?.name}</span>
          <p>Artista</p>
        </div>
      ))}
    </div>
  );
};

export default ArtistTable;
