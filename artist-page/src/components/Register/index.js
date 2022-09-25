import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Register() {
  const navigate = useNavigate();
  return (
    <div className="Container">
      <h2 className="content">
        Inscrever-se em uma<br></br> conta grátis do <br></br>iSpotify ®
      </h2>
      <div className="container-login"></div>
      <div className="input">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Crie uma senha" />
        <input type="chamar" placeholder="Como devemos chamar você?" />
      </div>
      <button className="cadastro" onClick={() => navigate("../artist")}>
        CADASTRAR
      </button>
      <div className="container-newAccount">
        <span className="newAccount1">Já é um usuário do iSpotify? </span>
        <span className="newAccount2">
          <u onClick={() => navigate("../")}>FAÇA LOGIN</u>
        </span>
      </div>
    </div>
  );
}

export default Register;
