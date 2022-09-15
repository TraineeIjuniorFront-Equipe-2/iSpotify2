import "./style.css";
import ArtistTable from "../ArtistTable"


const Dashboard = () => {
  return (
    <main className="dashboard">
      <section>
        <h2>Artistas</h2>
      </section>
      <ArtistTable/>
    </main>
  );
};

export default Dashboard;