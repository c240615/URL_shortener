const express = require("express");
const app = express();
const port = 3000;
const url = require("./models/url");
const ShortUrl = require("./models/url");
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

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));

// static
app.use(express.static("public"));

// 首頁
app.get("/", (req, res) => {
  res.render("index");
});

// 提交 originalUrl validUrl.isUri
app.post("/shortUrls", async (req, res) => {
  const originalUrl = req.body.originalUrl;
  await url
    .create({ originalUrl: originalUrl })
    .then(() => res.redirect("shorten"))
    .catch((error) => console.log(error));
});

// 呈現網址 
app.get("/shorten", async (req, res) => {   await url
    .find()
    .lean()
    .then((shortUrls) => res.render("shorten", { shortUrls }))
    .catch((error) => console.log(error));
});

// 短網址導向
app.get("/:shortUrl", async (req, res) => {
const result = await url.findOne({ 'shortUrl': req.params.shortUrl });
  return res.redirect(result.originalUrl);
});

app.listen(3000, (req, res) => {
  console.log("App is running on http://localhost:3000");
});
