require("dotenv").config()

const express = require("express")
const cors = require("cors")

const uploadRoutes = require("./routes/uploadRoutes")
const connectDB = require("./config/db")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API Running")
})

app.use("/api/upload", uploadRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})