# URL_shortener
## 首頁
![擷取](https://user-images.githubusercontent.com/97713225/216062891-6124af4c-0161-4409-839a-f9c2a113aa4d.PNG)
## 次頁
![擷取1](https://user-images.githubusercontent.com/97713225/216067979-0edb2596-e72e-46bc-a84e-aab1a544b940.PNG)
## 功能
1. 輸入欲縮短之網址並點擊 shorten
2. 清單顯示所有輸入過的網址，點擊短網址可導向欲縮短之網址
## 開始使用
1. 請確認已安裝 node.js 與 npm
2. git clone https://github.com/c240615/URL_shortener.git
3. 在本地開啟之後，透過終端機進入資料夾:

   ```bash
   cd 資料夾名稱  
   ```

4. 在終端機輸入:  
   ```bash
   npm install   
   ```
5. 在目錄下新增.env檔，設定MONGODB環境變數並於終端機輸入
   ```bash
   npm run start   
   ```
5. 開啟瀏覽器 輸入 http://localhost:3000 即可進入首頁

## 開發工具
1. "body-parser": "^1.20.1"
2. "bootstrap": "^5.2.3"
3. "express": "^4.18.2"
4. "express-handlebars": "^6.0.6"
5. "mongoose": "^6.8.3"
