import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Alert from "@mui/material/Alert";

import { api } from "../../../api";

import "./styles.css";

const PasswordModal = ({ isOpen, setIsOpen, user }) => {
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleUpdateUser = async () => {
    if (pass1 !== pass2 || !pass1 || !pass2) {
      setError("Erro no preenchimento dos campos");
      return;
    }
    setError("");
    try {
      setLoading(true);
      await api.put(`users/${user?.id}`, {
        password: pass1,
      });
      setIsOpen(false);
      setPass1("");
      setPass2("");
    } catch (error) {
      setError(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen}>
      <div className="account-modal">
        <h2>Nova senha</h2>
        <div className="my-account">
          <input
            placeholder="Nova Senha"
            type="password"
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}
          />
          <input
            placeholder="Confirmar nova senha"
            type="password"
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}

          <div className="modal-buttons">
            <button
              style={{ backgroundColor: "#E42D2D" }}
              disabled={loading}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancelar
            </button>
            <button onClick={() => handleUpdateUser()} disabled={loading}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default PasswordModal;
