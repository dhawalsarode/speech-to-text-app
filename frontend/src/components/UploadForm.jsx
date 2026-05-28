import { useState } from "react"
import API from "../services/api"

const UploadForm = ({ setTranscript }) => {

  const [file, setFile] = useState(null)

  const [loading, setLoading] =
    useState(false)

  const [error, setError] =
    useState("")

  const [success, setSuccess] =
    useState("")

  const handleUpload = async () => {

    setError("")
    setSuccess("")

    if (!file) {

      setError("Please select an audio file")

      return
    }

    const allowedTypes = [
      "audio/mpeg",
      "audio/wav",
      "audio/ogg",
      "audio/mp4"
    ]

    if (!allowedTypes.includes(file.type)) {

      setError("Invalid file type")

      return
    }

    if (file.size > 10 * 1024 * 1024) {

      setError("File size exceeds 10MB")

      return
    }

    const formData = new FormData()

    formData.append("audio", file)

    try {

      setLoading(true)

      const response =
        await API.post(
          "/upload",
          formData
        )

      setTranscript(response.data.data)

      setSuccess(
        "Transcription successful"
      )

    } catch (error) {

      console.log(error)

      setError(

        error.response?.data?.message
        || "Something went wrong"
      )

    } finally {

      setLoading(false)
    }
  }

  return (

    <div className="flex flex-col gap-5">

      <label className="cursor-pointer">

        <div className="
          border-2
          border-dashed
          border-blue-400
          rounded-2xl
          p-8
          text-center
          hover:bg-blue-50
          transition
        ">

          <p className="text-gray-600">
            Click to choose audio file
          </p>

        </div>

        <input
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

      </label>

      {
        file && (

          <p className="text-sm text-gray-600">
            Selected:
            {" "}
            {file.name}
          </p>
        )
      }

      {
        error && (

          <div className="
            bg-red-100
            text-red-700
            p-3
            rounded-xl
          ">
            {error}
          </div>
        )
      }

      {
        success && (

          <div className="
            bg-green-100
            text-green-700
            p-3
            rounded-xl
          ">
            {success}
          </div>
        )
      }

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
          bg-blue-600
          hover:bg-blue-700
          transition
          duration-300
          text-white
          py-3
          rounded-xl
          font-semibold
          disabled:opacity-50
          disabled:cursor-not-allowed
          flex
          justify-center
          items-center
        "
      >

        {
          loading ? (

            <div className="
              animate-spin
              rounded-full
              h-5
              w-5
              border-b-2
              border-white
            "></div>

          ) : (

            "Upload Audio"
          )
        }

      </button>

    </div>
  )
}

export default UploadForm