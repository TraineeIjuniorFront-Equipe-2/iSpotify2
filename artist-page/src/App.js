import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ArtistPage from "./pages/Album";
import FavSongs from "./pages/FavSongs";
import MyAccount from "./pages/myAccount";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute user={true}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favSongs"
        element={
          <ProtectedRoute user={true}>
            <FavSongs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/myAccount"
        element={
          <ProtectedRoute user={true}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/artist/:id"
        element={
          <ProtectedRoute user={true}>
            <ArtistPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute user={true}>
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
