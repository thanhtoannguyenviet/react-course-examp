import data from  './data.json'

export default async function (req,res){
    if (req.method === "GET") {
        const resData = await fetch("http://localhost:3001/api/resources")
        const data = await resData.json();
        return res.send(data)
    }
    if (req.method === "POST"){
        console.log(req.body)
        return res.send("Data has been received!")
    }
}