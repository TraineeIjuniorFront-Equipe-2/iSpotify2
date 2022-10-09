import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ArtistPage from "./pages/Album";
import FavSongs from "./pages/FavSongs";
import MyAccount from "./pages/MyAccount";

import "./App.css";

function App() {
  const usuario = true;
  if (usuario) {
     <Navigate to="/home" />;
  }
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute user={usuario}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favSongs"
        element={
          <ProtectedRoute user={usuario}>
            <FavSongs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myAccount"
        element={
          <ProtectedRoute user={usuario}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/artist/:id"
        element={
          <ProtectedRoute user={usuario}>
            <ArtistPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute user={usuario}>
            <Register />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
