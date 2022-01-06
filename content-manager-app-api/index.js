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
app.use(express.json())
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

app.post("/api/resources",(req,res)=>{
    const resources = getResources()
    // console.log("Data has been received to POST endpoint")
    // console.log(req.body)
    const resource = req.body
    resource.createAt= new Date()
    resource.status = "inactive"
    resource.id = Date.now().toString()
    resources.unshift(resource)
    fs.writeFile(pathToFile,JSON.stringify(resources,null,2), (err)=>{
        if(err){
            return res.status(422).send("Cannot store data in the file!")
        }
        return res.send("Data has been received")
    })
})

app.get("/api/resources/:id", (req,res)=>{
    const resources = getResources()
    const {id} = req.params
    const resource = resources.find((resource) => resource.id === id)
    res.send(resource)
})

app.patch("/api/resources/:id", (req,res)=>{
    const resources = getResources()
    const {id} = req.params
    const index = resources.findIndex((resource) => resource.id === id)
    resources[index] = req.body;
    fs.writeFile(pathToFile,JSON.stringify(resources,null,2), (err)=>{
        if(err){
            return res.status(422).send("Cannot store data in the file!")
        }
        return res.send("Data has been updated")
    })
})