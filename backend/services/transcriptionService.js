const { AssemblyAI } = require("assemblyai")

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLY_API_KEY
})

const transcribeAudio = async (filePath) => {

  try {

    const transcript =
      await client.transcripts.transcribe({

        audio: filePath,

        speech_models: ["universal-2"]
      })

    return transcript.text

  } catch (error) {

    console.log(error)

    throw new Error("Transcription failed")
  }
}

module.exports = transcribeAudio