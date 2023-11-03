import useLogout from "../../../hooks/useLogout";
import styles from "../Chat.module.css";

function ContactsBox({ activeItem, setActiveItem, chats }) {
  const { logout } = useLogout();

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
    <div className={styles.users_main_container}>
      <div className={styles.users_container}>
        <div className={styles.logout_button_container}>
          <h1>Chats</h1>
          <button onClick={logout} className={styles.logout_button}>
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
                isActive={activeItem == index}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactsBox;
