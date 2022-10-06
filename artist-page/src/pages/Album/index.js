import { useParams } from "react-router-dom";
import "./Album.css";

import Artist from "./DashboardS";
import Navbar from "../../components/Navbar";

function ArtistPage() {
  const params = useParams();

  return (
    <div className="Album">
      <Navbar />
      <Artist id={params?.id} />
    </div>
  );
}

export default ArtistPage;
