import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

import { api } from "../../api";

import "./style.css";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!email || !password || !name) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const data = {
      name,
      email,
      password,
      role: "user",
    };

    try {
      const response = await api.post("/users", data);
      navigate("/artist");
      /*console.log(response);*/
    } catch (error) {
      setError(error?.response?.data);
      /*console.log(error);*/
    }
  };

  return (
    <div className="Container">
      <h2 className="content">
        Inscrever-se em uma<br></br> conta grátis do <br></br>iSpotify ®
      </h2>
      <div className="container-login"></div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Crie uma senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="chamar"
            placeholder="Como devemos chamar você?"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
      </form>
      <button className="cadastro" type="submit" onClick={() => handleSubmit()}>
        CADASTRAR
      </button>
      {error && <Alert severity="error">{error}</Alert>}

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
