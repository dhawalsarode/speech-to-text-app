import { useRef, useState } from "react"

const Recorder = () => {

  const mediaRecorderRef = useRef(null)

  const [recording, setRecording] =
    useState(false)

  const startRecording = async () => {

    const stream =
      await navigator.mediaDevices.getUserMedia({
        audio: true
      })

    const mediaRecorder =
      new MediaRecorder(stream)

    mediaRecorderRef.current =
      mediaRecorder

    mediaRecorder.start()

    setRecording(true)
  }

  const stopRecording = () => {

    mediaRecorderRef.current.stop()

    setRecording(false)
  }

  return (

    <div className="mt-8 flex gap-4">

      <button
        onClick={startRecording}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Start Recording
      </button>

      <button
        onClick={stopRecording}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Stop Recording
      </button>

    </div>
  )
}

export default Recorder