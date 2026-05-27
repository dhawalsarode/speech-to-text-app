import { useState } from "react"
import API from "../services/api"

const UploadForm = ({ setTranscript }) => {

  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleUpload = async () => {

    if (!file) return

    const formData = new FormData()

    formData.append("audio", file)

    try {

      setLoading(true)

      const response = await API.post(
        "/upload",
        formData
      )

      setTranscript(response.data.data)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">

      <input
        type="file"
        accept="audio/*"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {
          loading
            ? "Transcribing..."
            : "Upload Audio"
        }
      </button>

    </div>
  )
}

export default UploadForm