import capa from "../../../assets/icons/cd_cover.png";
import "./style.css";

const AlbumDescription = () => {
  return (
    <div className="containnerS">
      <img src={capa} className="capaS" alt="capa" />
      <div className="DescriptionS">
        <h1>Daily Mix 1</h1>
        <p>Leva Noiz, Banda Djavú, Dimas e seus teclados e mais...</p>
        <span>
          Spotify - 5000 músicas<p id="hiddenS">1h 7min</p>
        </span>
      </div>
    </div>
  );
};

export default AlbumDescription;
