import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import Alert from "@mui/material/Alert";

import { api } from "../../../api";

import "./styles.css";

const EmailModal = ({ isOpen, setIsOpen, user }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleUpdateUser = async () => {
    if (!email) {
      setError("Erro no preenchimento dos campos");
      return;
    }
    setError("");
    try {
      setLoading(true);
      await api.put(`users/${user?.id}`, {
        email: email,
      });
      setIsOpen(false);
      setEmail("");
    } catch (error) {
      setError(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen}>
      <div className="account-modal">
        <h2>Novo E-mail</h2>
        <div className="my-account">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default EmailModal;
