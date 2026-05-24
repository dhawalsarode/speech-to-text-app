const mongoose = require("mongoose")

const transcriptionSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true
    },

    transcript: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model(
  "Transcription",
  transcriptionSchema
)