import React from "react";
import styles from './Chat.module.css'
function Chat() {
  return (
    <div className={styles.main_container}>
      <div className={styles.user_container}>
        <img
          src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-david-gandy.jpg"
          alt="pic1"
          height={50}
          width={50}
        />

        <p>ahsan</p>
        <img
          src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-david-gandy.jpg"
          alt="pic1"
          height={50}
          width={50}
        />

        <p>ahsan</p>
        <img
          src="https://www.apetogentleman.com/wp-content/uploads/2018/06/male-models-david-gandy.jpg"
          alt="pic1"
          height={50}
          width={50}
        />

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
