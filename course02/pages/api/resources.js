import data from  './data.json'
import axios from "axios";

export default async function (req,res){
    if (req.method === "GET") {
        const resData = await fetch("http://localhost:3001/api/resources")
        const data = await resData.json();
        return res.send(data)
    }
    if (req.method === "POST" || req.method === "PATCH"){
        console.log(req.body)
        const {id,title, description, link, timeToFinish, priority} = req.body
        if(!title || !description || !link || !timeToFinish || !priority)
            return  res.status(422).send("Data are missing!");

        const url = req.message === "POST" ? "http://localhost:3001/api/resources": "http://localhost:3001/api/resources/"+id
        try {
            const axiosRes = await axios[req.method.toLowerCase()](url,req.body)
            return  res.send(axiosRes.data)
        }
        catch (e) {
            return  res.status(422).send("Data cannot be stored!")
        }
        return res.send("Data has been received!")
    }
}