import { useNavigate } from "react-router-dom";
import styles from "../Chat.module.css";
import LogoutPopUp from "../../../components/logoutPopUp/logoutPopUp";
import { useState } from "react";
import useLogout from "../../../hooks/useLogout";

function ContactsBox({ activeItem, setActiveItem, chats }) {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const { logout } = useLogout();

  const navigate = useNavigate();
  function handleNavigate() {
    if (window.innerWidth < 650) {
      navigate("/mobilechat");
    }
  }

  const handleClose = () => {
    setShowLogoutPopup(false);
  };

  const ChatItem = ({ chat, isActive, index }) => (
    <div
      className={`${styles.user_container} ${
        isActive ? styles.user_active_container : ""
      }`}
      onClick={() => setActiveItem(index)}
    >
      <img
        src="https://footwearnews.com/wp-content/uploads/2022/12/Cha-Eun-Woo-2.jpg"
        alt="pic"
        height={50}
        width={50}
      />
      <p>{chat.participants[0].name}</p>
    </div>
  );

  return (
    <>
      <div className={styles.users_main_container}>
        <div className={styles.users_container} onClick={handleNavigate}>
          <div className={styles.logout_button_container}>
            <h1>Chats</h1>
            <button
              className={styles.logout_button}
              onClick={() => setShowLogoutPopup(true)}
            >
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>

          <div className={styles.user_items_container}>
            {chats.length === 0 ? (
              <p>No Chats</p>
            ) : (
              chats.map((chat, index) => (
                <ChatItem
                  key={`chat-item-${index}`}
                  chat={chat}
                  index={index}
                  isActive={activeItem === index}
                />
              ))
            )}
          </div>
        </div>
      </div>

      {showLogoutPopup ? (
        <LogoutPopUp onConfirm={logout} onCancel={handleClose} />
      ) : null}
    </>
  );
}

export default ContactsBox;
