import React from "react";
import styles from './Chat.module.css'
function Chat() {

      



  return (
    <div className={styles.main_container}>
      <div className={styles.user_container}>
       

        <p>ahsan</p>
      </div>
      <div className={styles.sent_messages_container}>
        <input type="text" />
        <button>➢</button>
      </div>
    </div>
  );
}

export default Chat;
