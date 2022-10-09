import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import { api } from "../../api";

import "./style.css";

function LoginPage() {
    useEffect(() => {
      document.title = "Login";
    });

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }
    setLoading(true);
    setError("");

    const data = {
      email,
      password,
    };

    try {
      await api.post("/users/login", data);
      navigate("/home");
    } catch (err) {
      setError(err?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
        }}
      >
        <h1>iSpotify®</h1>
        <h2>Música para todos.</h2>
        <div className="container-login"></div>
        <div className="input">
          <input
            type="email"
            placeholder="Insira seu email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button onClick={() => handleSubmit()} disabled={loading}>
          Entrar
        </button>

        {error && (
          <div style={{ padding: "8px 0" }}>
            <Alert severity="error">{error}</Alert>
          </div>
        )}

        <div className="container-newAccount">
          <span className="newAccount1">Não possui conta? </span>
          <span className="newAccount2">
            <u onClick={() => navigate("../register")}>Inscreva-se</u>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
