require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to DB"))

app.use(express.json())

const recipeRouter = require("./controller/recipeController")
app.use("/recipes", recipeRouter)

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})