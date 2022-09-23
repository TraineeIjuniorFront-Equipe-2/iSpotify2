import React from 'react'
import "./style.css"

function LoginPage() {
    return (
      <div className="Container">
        <h1>iSpotify®</h1>
        <h2>Música para todos.</h2>
        <div className="container-login"></div>
        <div className="input">
          <input type="email" placeholder="Insira seu email" />
          <input type="password" placeholder="Insira sua senha" />
        </div>
        <button>Entrar</button>
        <div className="container-newAccount">
          <span className="newAccount1">Não possui conta? </span>
          <span className="newAccount2">
            <u>Inscreva-se</u>
          </span>
        </div>
      </div>
    );
  }
  
  export default LoginPage;
