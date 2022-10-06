import { useEffect, useState } from "react";

import MusicTable from "../MusicTable";
import AlbumIcons from "../AlbumIcons";

import { apiSpotify } from "../../../api";

import "./style.css";

const Artist = ({ id }) => {
  const [artist, setArtist] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getArtist = async () => {
    try {
      const artistData = await apiSpotify.get(`/artists/${id}`);
      const songsData = await apiSpotify.get(
        `/artists/${id}/top-tracks?market=BR`
      );
      console.log(songsData.data);

      setArtist(artistData?.data);
      setSongs(
        songsData?.data?.tracks?.map((e) => ({
          name: e?.name,
          album: e?.album?.name,
          singer: artistData?.data?.name,
          img: e?.album?.images[0]?.url,
          id: e?.id,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      if (id) {
        setLoading(true);
        await getArtist();
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <main className="dashboardS">
      {!loading && (
        <section>
          <div className="artist-card">
            <img src={artist?.images[0]?.url} className="capaS" alt="capa" />
            <div className="DescriptionS">
              <h1>{artist?.name}</h1>
              <p>{artist?.genres?.join(", ")}</p>
            </div>
          </div>
          <div className="album-iconsS">
            <AlbumIcons />
          </div>
          <MusicTable musicData={songs} />
        </section>
      )}
    </main>
  );
};

export default Artist;
