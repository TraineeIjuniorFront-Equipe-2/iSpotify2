import { useEffect, useState } from "react";

import { api } from "../../api";

import Navbar from "../../components/Navbar";
import PasswordModal from "../../components/Modals/Password";
import EmailModal from "../../components/Modals/Email";

import "./styles.css";

function MyAccount() {
  const [userData, setUserData] = useState({});
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);

  const getUserData = async () => {
    try {
      const response = await api.get("/users/user");
      setUserData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      await getUserData();
    })();
  }, []);

  return (
    <>
      <div className="App">
        <Navbar />
        <main className="dashboard" style={{ background: "#111" }}>
          <div className="my-account">
            <input placeholder="Nome" disabled value={userData?.name} />
            <input placeholder="Email" disabled value={userData?.email} />
            <div className="my-account-buttons">
              <button onClick={() => setOpenEmailModal(true)}>
                Trocar email
              </button>
              <button onClick={() => setOpenPasswordModal(true)}>
                Trocar senha
              </button>
            </div>
          </div>
        </main>
      </div>
      <PasswordModal
        isOpen={openPasswordModal}
        setIsOpen={setOpenPasswordModal}
        user={userData}
      />

      <EmailModal
        isOpen={openEmailModal}
        setIsOpen={setOpenEmailModal}
        user={userData}
      />
    </>
  );
}

export default MyAccount;
