import React from "react";
import styles from "./Chat.module.css";
import useGetChats from "../../hooks/queries/useGetChats";

function Chat() {
  const { chats, loading } = useGetChats();

  return (
    <>
    <div className={styles.main_container}>
      {chats.map((chat, index) => (
          <div key={index} className={styles.user_container}>
           
            <p>{chat.participants[0].name}</p>
            <img src="https://footwearnews.com/wp-content/uploads/2022/12/Cha-Eun-Woo-2.jpg" alt="pic"  height={50} width={50}/>
            </div>
         
        ))}
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
    </>
  );
}

export default Chat;
