const express = require("express")
const cors = require("cors")

const uploadRoutes = require("./routes/uploadRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API Running")
})

app.use("/api/upload", uploadRoutes)

app.listen(5000, () => {
  console.log("Server running on port 5000")
})