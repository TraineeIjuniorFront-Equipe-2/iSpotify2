import React from "react";
import "./style.css";

function Register() {
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
      <button className="cadastro">CADASTRAR</button>
      <div className="container-newAccount">
        <span className="newAccount1">Já é um usuário do iSpotify? </span>
        <span className="newAccount2">
          <u>FAÇA LOGIN</u>
        </span>
      </div>
    </div>
  );
}

export default Register;
