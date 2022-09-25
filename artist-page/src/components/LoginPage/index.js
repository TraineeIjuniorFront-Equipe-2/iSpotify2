import React from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <h1>iSpotify®</h1>
      <h2>Música para todos.</h2>
      <div className="container-login"></div>
      <div className="input">
        <input type="email" placeholder="Insira seu email" />
        <input type="password" placeholder="Insira sua senha" />
      </div>
      <button onClick={() => navigate("../artist")}>Entrar</button>
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
