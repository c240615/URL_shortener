const mongoose = require("mongoose");
const db = mongoose.connection;
const url = require("../url")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.MONGODB_URI);

db.once("open", () => {
  console.log("db open");
    for (let i = 0; i < 10; i++) {
      url.create({ originalUrl: `originalUrl-${i}` });
    }
    console.log("done");
});
db.on("error", () => {
  console.log("db error");
});