const express = require("express")
const app = express()
const port = 3000

const mongoose = require("mongoose")
const db = mongoose.connection
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
mongoose.connect(process.env.MONGODB_URI);

db.once("open", () => {
  console.log("db open");
});
db.on("error", () => {
  console.log("db error");
});




app.get("/",(req,res)=>{
  console.log("Homepage")
})

// 設定404頁面
app.get("*",(req,res)=>{
	res.static(404)
	console.log(res.statusCode)
})

app.listen(3000,(req,res)=>{
  console.log("App is running on http://localhost:3000");
})