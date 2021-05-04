var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ status: "ok", data: "Hello World!" });
});
const memeAPI = require("./meme.api");
router.use("/memes", memeAPI);
module.exports = router;
