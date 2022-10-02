import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import { api } from "../../api";

import "./style.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }
    const data = {
      email,
      password,
    };

    try {
      await api.post("/users/login", data);
      navigate("/artist");
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  return (
    <div className="Container">
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
      <button onClick={() => handleSubmit()}>Entrar</button>

      {error && <Alert severity="error">{error}</Alert>}

      <div className="container-newAccount">
        <span className="newAccount1">Não possui conta? </span>
        <span className="newAccount2">
          <u onClick={() => navigate("../register")}>Inscreva-se</u>
        </span>
      </div>
    </div>
  );
}

export default LoginPage;
