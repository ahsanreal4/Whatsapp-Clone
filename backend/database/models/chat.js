const { Schema, model } = require("mongoose");

const chatSchema = new Schema({
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
  unread_messages_count: [{ type: Schema.Types.Object, default: {} }],
});

module.exports = model("Chat", chatSchema);
