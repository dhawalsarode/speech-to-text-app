import { useEffect, useState } from "react"
import API from "../services/api"

const TranscriptList = () => {

  const [transcripts, setTranscripts] =
    useState([])

  useEffect(() => {

    fetchTranscripts()

  }, [])

  const fetchTranscripts = async () => {

    try {

      const response =
        await API.get("/upload")

      setTranscripts(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <div className="mt-10">

      <h2 className="text-2xl font-bold mb-4">
        History
      </h2>

      <div className="space-y-4">

        {
          transcripts.map((item) => (

            <div
              key={item._id}
              className="bg-white p-4 rounded shadow"
            >

              <p className="font-semibold">
                {item.fileName}
              </p>

              <p>
                {item.transcript}
              </p>

            </div>
          ))
        }

      </div>
    </div>
  )
}

export default TranscriptList