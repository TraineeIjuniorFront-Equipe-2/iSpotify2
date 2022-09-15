import "./style.css";
import ArtistTable from "../ArtistTable"


const Dashboard = () => {
  return (
    <main className="dashboard">
      <section>
        <h3>Artistas</h3>
      </section>
      <ArtistTable/>
    </main>
  );
};

export default Dashboard;