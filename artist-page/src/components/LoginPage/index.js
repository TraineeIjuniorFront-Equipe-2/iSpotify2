import React from 'react'
import "./style.css"

function LoginPage() {
    return (
      <div className='Container'>
          <header>iSpotify</header>
          <header>Música para todos.</header>
          <div className='container-login'></div>
          <div className='input'>
            <input type="email"/>
            <input type="password"/>
          </div>
          <div className='button'>Entrar</div>
          <div className='container-newAccount'>
            <span className='newAccount1'>Não possui conta?</span>
            <span className='newAccount2'>Inscreva-se</span>
          </div>
      </div>
    );
  }
  
  export default LoginPage;
