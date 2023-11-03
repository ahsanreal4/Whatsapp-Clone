import { useEffect, useRef } from "react";
import useGetChatMessages from "../../../hooks/queries/useGetChatMessages";
import styles from "../Chat.module.css";
import { useGlobalContext } from "../../../context/globalContext/globalContext";
import useSendChatMessageMutation from "../../../hooks/mutators/useSendChatMessageMutation";
import { toast } from "react-toastify";
import moment from "moment";

function MessageInputBox({ chatId }) {

  const { messages, getChatMessages } = useGetChatMessages();
  const { sendMessage } = useSendChatMessageMutation();
  const chatInputRef = useRef(null);
  const { user } = useGlobalContext();

  useEffect(() => {
    if (!chatId) return;
    getChatMessages(chatId);
  }, [chatId]);

  useEffect(() => {
    if (messages?.length < 1) return;
    scrollChatContainer();
  }, [messages]);

  function scrollChatContainer() {
    const chatContainer = document.getElementById("user-chat-container-id");
    if (!chatContainer) return;

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  const sendChatMessage = async () => {
    const text = chatInputRef.current.value;
    if (text === "") {
      toast.error("Please type something");
      return;
    }
    await sendMessage(chatId, text, user._id);
    chatInputRef.current.value = "";
    getChatMessages(chatId);
  };

  const Message = ({ message }) => (
    <div
      className={`${
<<<<<<< HEAD
        message.sender._id === user._id ? styles.second_user : styles.first_color
      }`}
=======
        message.sender._id == user._id ? styles.second_user : styles.first_color
      } ${styles.user_message_container}`}
>>>>>>> 824d4e93b53e6772dc75686ddfa92c0b7f00f80d
    >
      <h4>{message.message}</h4>
      <div>
        <p className={styles.message_time}>
          {moment(message.createdAt).format("hh:mm a")}
        </p>
      </div>
    </div>
  );

  return (
    <div className={styles.sent_messages_container}>
      <div id="user-chat-container-id" className={styles.user_chat_container}>
        {messages.map((message, index) => (
          <Message key={`message-${index}`} message={message} />
        ))}
      </div>
      <div className={styles.input_messages_container}>
        <input
          type="text"
          ref={chatInputRef}
          autoFocus
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              sendChatMessage();
            }
          }}
        />
        <br />
        <button onClick={sendChatMessage}>➢</button>
      </div>
    </div>
  );
}

export default MessageInputBox;
