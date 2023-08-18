const express = require("express");
const port = 3000;

const app = express();

const bodyParser = require("body-parser");

require("./db");
require("./models/User");

const authRoutes = require("./routes/authRoutes");
const requireToken = require("./middlewares/AuthTokenRequired");

const cors = require("cors");

app.use(bodyParser.json());
app.use(authRoutes);
app.use(cors());

app.get("/", requireToken, (req, res) => {
  console.log(req.user);
  res.send("This is home page");
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
