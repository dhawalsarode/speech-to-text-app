const transcribeAudio = require("../services/transcriptionService")
const Transcription = require("../models/Transcription")

const uploadAudio = async (req, res) => {

  try {

    if (!req.file) {

      return res.status(400).json({
        message: "No file uploaded"
      })
    }

    const transcript =
      await transcribeAudio(req.file.path)

    const savedTranscript =
      await Transcription.create({

        fileName: req.file.filename,

        transcript
      })

    res.status(200).json({

      message: "Transcription successful",

      data: savedTranscript
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: "Server Error"
    })
  }
}

module.exports = { uploadAudio }