const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

let dbConnection = "Waiting for DB to respond..."

router.get("/", function(req, res, next) {
    res.send(dbConnection)
})

mongoose.connect("mongodb://mongodb:27017/test")

mongoose.connection.on("error", error => {
    console.log("Database connection error:", error)
    dbConnection = "Error connecting to DB"
})

mongoose.connection.on("open", () => {
    console.log("Connected to DB")
    dbConnection = "Connected to DB"
})

module.exports = router