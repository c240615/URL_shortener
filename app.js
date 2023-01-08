const express = require("express")
const app = express()
const port = 3000

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