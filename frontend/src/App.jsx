import { useState } from "react"
import UploadForm from "./components/UploadForm"
import Recorder from "./components/Recorder"
import TranscriptList from "./components/TranscriptList"

function App() {

  const [transcript, setTranscript] =
    useState(null)

  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-4xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
            Speech To Text
          </h1>

          <p className="text-center text-gray-500 mb-10">
            Upload or record audio and convert speech into text
          </p>

          <UploadForm
            setTranscript={setTranscript}
          />

          <Recorder />

          {
            transcript && (

              <div className="mt-10 bg-gray-50 rounded-2xl p-6 shadow">

                <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                  Latest Transcript
                </h2>

                <p className="text-gray-700 leading-relaxed">
                  {transcript.transcript}
                </p>

              </div>
            )
          }

        </div>

        <TranscriptList />

      </div>

    </div>
  )
}

export default App