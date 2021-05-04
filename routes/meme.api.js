const express = require("express");
const router = express.Router();

const upload = require("../helpers/upload.helper").upload;
const photoHelper = require("../helpers/photo.helper");

const memeController = require("../controllers/meme.controller");

/**
 * @route GET api/memes
 * @description Get all memes
 * @access Public
 */
router.get("/", memeController.getMemes);

/**
 * @route POST api/memes
 * @description Create a new meme
 * @access Public
 */

router.post(
  "/",
  upload.single("image"),
  photoHelper.resize,
  memeController.createMeme,
  (req, res, next) => {
    console.log(req);
    res.send({ status: "ok" });
  }
);

/**
 * @route GET api/memes/images
 * @description Get list of original images
 * @access Public
 */
router.get("/images", memeController.getOriginalImages);

/**
 * @route PUT api/memes/:id
 * @description Update text on the meme
 * @access Public
 */
router.put("/:id", memeController.updateMeme);

// router.post(
//   "/",
//   upload.single("image"),
//
// );
module.exports = router;
