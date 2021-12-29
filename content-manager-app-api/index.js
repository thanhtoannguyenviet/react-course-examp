const express = require("express")
const app = express()
const PORT = 3001

const fs = require("fs")
const path = require("path")
const pathToFile= path.resolve("./data.json")

const getResources = () => JSON.parse(fs.readFileSync(pathToFile))

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