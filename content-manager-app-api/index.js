const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 3001

const fs = require("fs")
const path = require("path")
const pathToFile= path.resolve("./data.json")

const getResources = () => JSON.parse(fs.readFileSync(pathToFile))

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.listen(PORT,()=>{
    console.log("Server is listening on port:" + PORT )
})

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/api/resources",(req,res)=>{
    // const stringifiedData = fs.readFileSync(pathToFile)
    // console.log(JSON.parse(stringifiedData))
    const resources = getResources()
    res.send(resources)
})