const { Schema, model } = require("mongoose");
const timestamps = require("mongoose-timestamp");

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  message: String,
});

messageSchema.plugin(timestamps);

module.exports = model("Message", messageSchema);
