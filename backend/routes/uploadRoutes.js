const express = require("express")
const multer = require("multer")
const { uploadAudio } = require("../controllers/uploadController")
const { getTranscriptions } = require("../controllers/uploadController")

const router = express.Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/")
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({

  storage,

  fileFilter: (req, file, cb) => {

    if (
      file.mimetype.startsWith("audio/")
    ) {

      cb(null, true)

    } else {

      cb(
        new Error(
          "Only audio files are allowed"
        )
      )
    }
  }
})

router.post("/", upload.single("audio"), uploadAudio)

router.get("/", getTranscriptions)

module.exports = router