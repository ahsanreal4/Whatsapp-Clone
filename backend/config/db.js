const mongoose = require("mongoose");
const { DB_URL } = require("../data/db");

(async function () {
  mongoose.connect(DB_URL, {});
  const db = mongoose.connection;

  db.on("error", (error) => {
    console.error("Database error:", error);
  });

  db.on("open", () => {
    console.log("Database connected!");
  });
})();
