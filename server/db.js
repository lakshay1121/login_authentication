const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("database connected successfully!.");
  })
  .catch((err) => {
    console.log("could not connect to db", err);
  });
