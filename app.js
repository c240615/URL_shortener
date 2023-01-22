const express = require("express");
const app = express();
const port = 3000;
const url = require("./models/url");
const bodyParser = require("body-parser");

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

app.use(bodyParser.urlencoded({ extended: true }));

// static
app.use(express.static("public"));

// 首頁
app.get("/", (req, res) => {
  res.render("index");
});

// 提交 originalUrl
app.post("/shortUrl", (req, res) => {
  const originalUrl = req.body.originalUrl;  
  if (
    url.find(
      { originalUrl: originalUrl } ,
      { originalUrl: 1, _id: 0 }
    ) === { originalUrl: originalUrl }
  ) {
    return console.log(repeat);
  } else {
    return url
      .create({ originalUrl })
      .then(() => res.redirect("shorten"))
      .catch((error) => console.log(error));
  }
});
/*
app.get("/:shortUrl/:id", (req, res) => {
  let Url = url.find({ shortUrl: req.params.shortUrl });
  return res.redirect(Url.originalUrl); // 剩下這裡要處理
});*/

// 要抓取POST值 可以用 body; 要抓取GET值 可以用 query; 要抓取Routing值 可以用 params
// shorten.hbs 呈現 短網址
app.get("/shorten", (req, res) => {
  return url
    .find(req.params.shortUrl)
    .lean()
    .then((shortUrl) => res.render("shorten", { shortUrl }))
    .catch((error) => console.log(error));
});

// 使用者點擊短網址
app.get("/:shortUrl", (req, res) => {
  let Url = url.find({ shortUrl: req.params.shortUrl });
  return res.redirect(Url.originalUrl); // 剩下這裡要處理
});

// 設定404頁面
app.get("*", (req, res) => {
  res.status(404);
  console.log(res.statusCode);
});

app.listen(3000, (req, res) => {
  console.log("App is running on http://localhost:3000");
});
