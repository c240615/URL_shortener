function getCode(max) {
  let code = "";
  let letter = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < max; i++) {
    code += letter.charAt(Math.floor(Math.random() * letter.length));
  }
  let shortUrl = "https://claire/" + code;
  return shortUrl;
}
getCode(5);
