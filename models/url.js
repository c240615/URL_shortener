if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI);

function getCode(max) {
  let code = "";
  let letter = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < max; i++) {
    code += letter.charAt(Math.floor(Math.random() * letter.length));
  }  
  return code;
}

const urlSchema = new Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: () => getCode(5),
  },
});

module.exports = mongoose.model("ShortUrl", urlSchema);

