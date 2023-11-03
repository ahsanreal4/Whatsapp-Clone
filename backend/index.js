const express = require("express");
const cors = require("cors");
const http = require("http");

const app = express();
const noAuth = require("./routes/noAuth");
const api = require("./routes/api");
const { init } = require("./config/socketio");
const PORT = 8000;

const server = new http.Server(app);

// Initialize socket io
init(server);

// Connect database
require("./config/db");

// Use cors
app.use(cors());

// Use json as Content Type
app.use(express.json());

// Setup routes
app.use("/noAuth", noAuth);
app.use("/api", api);

server.listen(PORT, function () {
  console.log(`Listening to port ${PORT}`);
});
