import styles from "./Chat.module.css";
import useGetChats from "../../hooks/queries/useGetChats";
import useLogout from "../../hooks/useLogout";

function Chat() {
  const { chats } = useGetChats();
  const { logout } = useLogout();




  const ChatItem = ({ chat }) => (
    <div
      className={styles.user_container}
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
      <div className={styles.main_container}>
        <div className={styles.users_main_container}>
          <div className={styles.users_container}>
            <h1>Chats</h1>
            <div className={styles.user_items_container}>
              {chats.length === 0 ? (
                <p>No Chats</p>
              ) : (
                chats.map((chat, index) => (
                  <ChatItem key={`chat-item-${index}`} chat={chat} />
                ))
              )}
            </div>
          </div>
        </div>
        <button className={styles.logout_button} onClick={logout}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
          <>
            <div className={styles.sent_messages_container}>
              <div className={styles.user_chat_container}>
                <h3 className={styles.first_color}>ahsan</h3>
                <h3 className={styles.second_user}>faizan</h3>
              </div>
              <div className={styles.input_messages_container}>
              <input type="text" />
              <br />
              <button>➢</button>
            </div>
            </div>
    
          </>
      </div>
    </>
  );
}

export default Chat;
