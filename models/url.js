const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  originalUrl:{
    type:string,
    required
  }
})

module.exports = mongoose.model("longUrl", urlSchema);