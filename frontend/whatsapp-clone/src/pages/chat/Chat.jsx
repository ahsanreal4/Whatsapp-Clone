import React from "react";
import styles from "./Chat.module.css";
import useGetChats from "../../hooks/queries/useGetChats";

function Chat() {
  const { chats, loading } = useGetChats();

  return (
    <div className={styles.main_container}>
      <div className={styles.user_container}>
        <p>ahsan</p>
      </div>
      <div className={styles.sent_messages_container}>
        <div className={styles.user_chat_container}>
          <h3 className={styles.first_color}>ahsan</h3>
          <h3 className={styles.second_user}>fazan</h3>
        </div>
        <div className={styles.input_messages_container}>
          <input type="text" />
          <br />
          <button>➢</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
