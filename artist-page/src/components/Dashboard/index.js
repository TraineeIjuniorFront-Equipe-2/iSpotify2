import { useEffect, useState } from "react";

import ArtistTable from "../ArtistTable";

import { apiSpotify, api } from "../../api";

import "./style.css";

import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const artitsList = [
  "246dkjvS1zLTtiykXe5h60",
  "7dGJo4pcD2V6oG8kP0tJRR",
  "2ye2Wgw4gimLv2eAKyk1NB",
  "4S9EykWXhStSc15wEx8QFK",
  "26dSoYclwsYLMAKD3tpOr4",
  "4C4kpaAdp6aKSkguw40SsU",
  "1pk1stIyHnuK6lXZ8QiNKt",
  "1mvpEXClANunyiHFtAXCxt",
  "5K4W6rqBFWDnAN6FQUkS6x",
  "2euX7vCVnJy3TVEGfc0RCl",
  "246dkjvS1zLTtiykXe5h60",
  "7dGJo4pcD2V6oG8kP0tJRR",
  "2ye2Wgw4gimLv2eAKyk1NB",
  "4S9EykWXhStSc15wEx8QFK",
  "26dSoYclwsYLMAKD3tpOr4",
];

const Dashboard = () => {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    try {
      const res = await Promise.all(
        artitsList.map(async (id) => {
          const response = await apiSpotify.get(`/artists/${id}`);
          return { ...response.data.images[2], name: response.data.name };
        })
      );

      setSongs(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getSongs();
    })();
  }, []);

  const navigate = useNavigate();

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
