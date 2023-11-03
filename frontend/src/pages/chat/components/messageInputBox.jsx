import { useEffect } from "react";
import useGetChatMessages from "../../../hooks/queries/useGetChatMessages";
import styles from "../Chat.module.css";

function MessageInputBox({ chatId }) {
  const { messages, getChatMessages } = useGetChatMessages();

  useEffect(() => {
    if (!chatId) return;
    getChatMessages(chatId);
  }, [chatId]);

  return (
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
  );
}

export default MessageInputBox;
