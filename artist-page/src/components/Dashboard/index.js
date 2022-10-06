import { useEffect, useState } from "react";

import ArtistTable from "../ArtistTable";

import { apiSpotify } from "../../api";

import "./style.css";

const Dashboard = () => {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    try {
      const response = await apiSpotify.get(
        `/artists?ids=246dkjvS1zLTtiykXe5h60,7dGJo4pcD2V6oG8kP0tJRR,2ye2Wgw4gimLv2eAKyk1NB,4S9EykWXhStSc15wEx8QFK,26dSoYclwsYLMAKD3tpOr4,4C4kpaAdp6aKSkguw40SsU,1pk1stIyHnuK6lXZ8QiNKt,1mvpEXClANunyiHFtAXCxt,5K4W6rqBFWDnAN6FQUkS6x`
      );

      const songsList = response?.data?.artists?.map((s) => ({
        url: s?.images[0]?.url,
        name: s?.name,
        id: s?.id,
      }));

      setSongs(songsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getSongs();
    })();
  }, []);

  return (
    <>
      <main className="dashboard">
        <section className="section">
          <h2>Artistas</h2>
          <ArtistTable songs={songs} />
        </section>
      </main>
    </>
  );
};

export default Dashboard;
