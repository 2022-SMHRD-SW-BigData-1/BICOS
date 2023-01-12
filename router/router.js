const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const axios = require("axios");
const path = require("path");

// DB사용 정보 입력
let conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "123456",
  port: "3306",
  database: "nodejs_DB",
});

router.get("*", function (request, response) {
  console.log("접속 성공");
  response.sendFile(path.join(__dirname, "..", "bicos", "build", "index.html"));
});
module.exports = router;
