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

      <h2 className="
        text-3xl
        font-bold
        mb-6
        text-blue-600
      ">
        Transcription History
      </h2>

      <div className="grid gap-5">

        {
          transcripts.map((item) => (

            <div
              key={item._id}

              className="
                bg-white
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition
                duration-300
                p-6
              "
            >

              <div className="
                flex
                justify-between
                items-center
                mb-3
              ">

                <h3 className="
                  font-semibold
                  text-gray-800
                ">
                  {item.fileName}
                </h3>

                <span className="
                  text-sm
                  text-gray-400
                ">
                  {
                    new Date(
                      item.createdAt
                    ).toLocaleString()
                  }
                </span>

              </div>

              <p className="
                text-gray-700
                leading-relaxed
              ">
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