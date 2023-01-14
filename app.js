const express = require("express");
const app = express();
const port = 3000;

const exphbs = require("express-handlebars");

const mongoose = require("mongoose");
const db = mongoose.connection;
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

db.once("open", () => {
  console.log("db open");
});
db.on("error", () => {
  console.log("db error");
});

app.engine("hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

// static
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortURL", (req, res) => {
  res.render("index");
});

// 設定404頁面
app.get("*", (req, res) => {
  res.status(404);
  console.log(res.statusCode);
});

app.listen(3000, (req, res) => {
  console.log("App is running on http://localhost:3000");
});
