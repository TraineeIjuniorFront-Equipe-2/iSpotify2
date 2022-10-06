import "./style.css";

const ArtistCard = ({ songs }) => {
  return (
    <div className="container-artist-list">
      {songs.map((val, i) => (
        <a href={`/artist/${val?.id}`} key={i}>
          <div className="Artist">
            <img src={val?.url} alt="artist" className="artist_image" />
            <span className="artist_name">{val?.name}</span>
            <p>Artista</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ArtistCard;
