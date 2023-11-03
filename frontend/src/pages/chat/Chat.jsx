import { useState } from "react";

import styles from "./Chat.module.css";

import MessageInputBox from "./components/messageInputBox";
import ContactsBox from "./components/contactsBox";

import useGetChats from "../../hooks/queries/useGetChats";

function Chat() {
  const { chats } = useGetChats();
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <div className={styles.main_container}>
        <ContactsBox
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          chats={chats}
        />
        <MessageInputBox chatId={chats?.[activeItem]?._id} />
      </div>
    </>
  );
}

export default Chat;
