import express from "express"
import cors from "cors"
import multer from "multer"
import { v4 as uuiv4 } from "uuid"

const app = express()

app.get('/', function(req, res) {
    res.json({message: "Hello G Namaste"})
})

app.listen(8000, function() {
    console.log("App is listening at port 3000...")
})