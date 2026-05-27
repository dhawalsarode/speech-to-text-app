import { useState } from "react"
import UploadForm from "./components/UploadForm"
import TranscriptList from "./components/TranscriptList"

function App() {

  const [transcript, setTranscript] =
    useState(null)

  return (

    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-3xl font-bold mb-8">
        Speech To Text App
      </h1>

      <UploadForm
        setTranscript={setTranscript}
      />

      {
        transcript && (

          <div className="mt-8 bg-white p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-2">
              Transcript
            </h2>

            <p>
              {transcript.transcript}
            </p>

          </div>
        )
      }

    </div>
  )
}

export default App