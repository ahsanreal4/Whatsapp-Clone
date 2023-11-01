const User = require("../database/models/user");
const Chat = require("../database/models/chat");

const getChats = async (userDetails) => {
  const user = await User.findOne({ email: userDetails.email });
  const chats = await Chat.find({ participants: { $in: user._id } }).populate({
    path: "participants",
    select: "name",
  });

  const chatsClone = chats.map((chat) => {
    const chatParticipants = chat.participants.filter(
      (part) => part._id.toString() != user._id.toString()
    );

    chat.participants = chatParticipants;
    return chat;
  });

  return chatsClone;
};

const createChat = async (participants) => {
  const chat = new Chat({
    messages: [],
    participants,
    unread_messages_count: 0,
  });

  await chat.save();
};

module.exports = { getChats, createChat };
