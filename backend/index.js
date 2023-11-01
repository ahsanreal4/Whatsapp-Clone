const express = require("express");
const cors = require("cors");

const app = express();
const noAuth = require("./routes/noAuth");
const api = require("./routes/api");
const PORT = 8000;

// Connect database
require("./config/db");

// Use cors
app.use(cors());

// Use json as Content Type
app.use(express.json());

// Setup routes
app.use("/noAuth", noAuth);
app.use("/api", api);

app.listen(PORT, function () {
  console.log(`Listening to port ${PORT}`);
});
